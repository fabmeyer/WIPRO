package ch.hslu.wipro.qc.config.injection;

import java.io.IOException;
import java.util.Properties;

import org.reflections.Reflections;
import org.reflections.scanners.SubTypesScanner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.persist.PersistFilter;
import com.google.inject.servlet.GuiceServletContextListener;
import com.google.inject.servlet.ServletModule;


public class GuiceServletConfig extends GuiceServletContextListener {
	
//	@Inject
//	ServiceLocator locator;
	private static final Logger LOG = LoggerFactory.getLogger( GuiceServletConfig.class );
	
	private boolean initialized = false;
	
	@Override
	protected Injector getInjector() {
		Injector injector = Guice.createInjector(new ServletModule() {
			@Override
			protected void configureServlets() {
					filter("/*").through(PersistFilter.class);
    				Reflections services = new Reflections("ch.hslu.wipro.qc.service", new SubTypesScanner(false));
    				Reflections restAdapters = new Reflections("ch.hslu.wipro.qc.adapter.rest", new SubTypesScanner(false));

    				
    				services.getSubTypesOf(Object.class).forEach((r) -> {
    					System.out.println("Binding Service: " + r.getName());
    					bind(r).asEagerSingleton();
    				});

    			}

		});
		
		if (!initialized) {
			try
			{
				Properties props = System.getProperties();
				LOG.debug( "Start Loading Properties from almconfig.properties file");
				props.load( getClass().getClassLoader().getResourceAsStream( "almconfig.properties" ) );
				LOG.debug( "Properties loaded from almconfig.properties file");
				System.setProperties(props);
				LOG.debug( "Properties successfully set!");
			}
			catch ( IOException e )
			{
				LOG.error( "Failed to initialize Loginmodule: " + e.getMessage() );
			}
			initialized = true;
		}
		return injector;
	}
	
	
}