package ch.hslu.wipro.qc.embedded;



import java.io.File;
import java.net.MalformedURLException;

import javax.servlet.ServletException;

import org.apache.catalina.LifecycleException;
import org.apache.catalina.WebResourceRoot;
import org.apache.catalina.connector.Connector;
import org.apache.catalina.core.StandardContext;
import org.apache.catalina.startup.Tomcat;
import org.apache.catalina.webresources.DirResourceSet;
import org.apache.catalina.webresources.StandardRoot;

public class TomcatStarter {
	public static void main( String[] args ) throws MalformedURLException, ServletException, LifecycleException
	{
		String webappDirLocation = "src/main/webapp/";
        Tomcat tomcat = new Tomcat();
        tomcat.enableNaming();

        String webPort = System.getenv("PORT");
        if(webPort == null || webPort.isEmpty()) {
            webPort = "8080";
        }

        tomcat.setPort(Integer.valueOf(webPort));

        Connector connector = tomcat.getConnector();
        connector.setProperty( "compression", "on" );
        connector.setProperty("compressionMinSize", "1024");
        connector.setProperty("noCompressionUserAgents", "gozilla, traviata");
        connector.setProperty("compressableMimeType", "text/html,text/xml, text/css, application/json, application/javascript");
        
        StandardContext ctx = (StandardContext) tomcat.addWebapp("", new File(webappDirLocation).getAbsolutePath());
        System.out.println("configuring app with basedir: " + new File("./" + webappDirLocation).getAbsolutePath());

        ctx.setDefaultContextXml( new File(webappDirLocation+"META-INF/context.xml").getAbsolutePath() );
        // Define and bind web.xml file location.
        File configFile = new File(webappDirLocation + "WEB-INF/web.xml");
        ctx.setConfigFile(configFile.toURI().toURL());
        

        File additionWebInfClasses = new File("build/classes/main/");
//        File additionWebInfLibs = new File(System.getenv( "MAVEN_LOCAL" ));
        WebResourceRoot resources = new StandardRoot(ctx);
        resources.addPreResources(new DirResourceSet(resources, "/WEB-INF/classes/",
        	 additionWebInfClasses.getAbsolutePath(), "/"));

        ctx.setResources(resources);
        

        tomcat.start();
        tomcat.getServer().await();
	}
}
