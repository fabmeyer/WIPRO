package ch.hslu.wipro.qc.config.injection;

import java.io.IOException;
import java.net.URL;
import java.util.Properties;

import org.reflections.Reflections;
import org.reflections.scanners.SubTypesScanner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.persist.PersistFilter;
import com.google.inject.persist.jpa.JpaPersistModule;
import com.google.inject.servlet.GuiceServletContextListener;
import com.google.inject.servlet.ServletModule;


import ch.hslu.wipro.qc.adapter.AbstractCrudResource;
import ch.hslu.wipro.qc.config.transaction.GuiceTransactionRunner;
import ch.hslu.wipro.qc.config.transaction.GuiceTransactionRunnerImpl;
//import ch.asb.initializer.DataInitializer;
//import io.crnk.jpa.CustomJpaModule;

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
//				GuiceBridge.getGuiceBridge().initializeGuiceBridge(locator);
                // add your Guice modules.
    				Reflections services = new Reflections("ch.hslu.wipro.qc.service", new SubTypesScanner(false));
    				Reflections restAdapters = new Reflections("ch.hslu.wipro.qc.adapter.rest", new SubTypesScanner(false));
    				//Reflections daos = new Reflections("ch.asb.dao", new SubTypesScanner(false));

//    				bind(LoginModulInitializer.class);
    				
    				/*daos.getSubTypesOf(Object.class).forEach((r) -> {
    					System.out.println("Binding DAO: " + r.getName());
    					bind(r).asEagerSingleton();
    				});
    				*/
    				
    				services.getSubTypesOf(Object.class).forEach((r) -> {
    					System.out.println("Binding Service: " + r.getName());
    					bind(r).asEagerSingleton();
    				});
    				
    				restAdapters.getSubTypesOf(AbstractCrudResource.class).forEach((r) -> {
    					System.out.println("Binding Adapter: " + r.getName());
    					bind(r);
    				});
    				
    				bind(GuiceTransactionRunnerImpl.class).asEagerSingleton();
    				bind(GuiceTransactionRunner.class).asEagerSingleton();
//    				bind(TransactionRunner.class).to(GuiceTransactionRunner.class);

//    				bind(CdiTransactionRunner.class).asEagerSingleton();
//    				bind(CdiTransactionRunnerImpl.class).asEagerSingleton();
    				//requestStaticInjection(LoginModul.class);
    				
    				//bind(DataInitializer.class).asEagerSingleton();
//    				 JpaPersistModule pm = new JpaPersistModule("asb");
    				//install(new JpaPersistModule("asb"));
//    				requestStaticInjection(LoginModulInitializer.class);
    			}
                
//                GuiceIntoHK2Bridge guiceBridge = locator.getService(GuiceIntoHK2Bridge.class);
//                guiceBridge.bridgeGuiceInjector(injector);
		});
		
		if (!initialized) {
			try
			{
				// URL jaasURL = getClass().getClassLoader().getResource( "ch/alpnet/framework/loginmodule/jaas.config" );
				// LOG.debug( "Getting JAAS Config from URL: " + jaasURL.toExternalForm() );
				// System.setProperty( "java.security.auth.login.config", jaasURL.toExternalForm() );
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