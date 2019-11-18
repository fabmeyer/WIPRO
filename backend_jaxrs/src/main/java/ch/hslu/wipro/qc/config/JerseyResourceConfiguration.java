package ch.hslu.wipro.qc.config;

import javax.inject.Inject;
import javax.servlet.ServletContext;
import javax.ws.rs.core.Context;

import org.glassfish.hk2.api.ServiceLocator;
import org.glassfish.hk2.utilities.binding.AbstractBinder;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.filter.RolesAllowedDynamicFeature;
import org.jvnet.hk2.guice.bridge.api.GuiceBridge;
import org.jvnet.hk2.guice.bridge.api.GuiceIntoHK2Bridge;

import com.google.inject.Injector;

import ch.hslu.wipro.qc.config.crnk.AdvancedCrnkFeature;

public class JerseyResourceConfiguration extends ResourceConfig {

	@Inject
    public JerseyResourceConfiguration(ServiceLocator locator, @Context ServletContext servletContext) {
		Injector injector = (Injector) servletContext.getAttribute(Injector.class.getName());
//		property(CrnkProperties.RESOURCE_SEARCH_PACKAGE, "io.crnk.rs.resource");
        // where the TestResource class is
//        packages("com.example.rest.resources"); 
		register(RolesAllowedDynamicFeature.class);
        register(new AbstractBinder() {
            @Override
            protected void configure() {
            	GuiceBridge.getGuiceBridge().initializeGuiceBridge(locator);
//                // add your Guice modules.
//                Injector injector = Guice.createInjector(new ServletModule() {
//        			@Override
//        			protected void configureServlets() {
//        				Reflections services = new Reflections("ch.asb.services", new SubTypesScanner(false));
//        				Reflections restAdapters = new Reflections("ch.asb.adapter.rest", new SubTypesScanner(false));
//        				Reflections daos = new Reflections("ch.asb.dao", new SubTypesScanner(false));
//
//        				daos.getSubTypesOf(Object.class).forEach((r) -> {
//        					System.out.println("Binding DAO: " + r.getName());
//        					bind(r).asEagerSingleton();
//        				});
//        				
//        				services.getSubTypesOf(Object.class).forEach((r) -> {
//        					System.out.println("Binding Service: " + r.getName());
//        					bind(r).asEagerSingleton();
//        				});
//        				
//        				restAdapters.getSubTypesOf(AbstractCrudResource.class).forEach((r) -> {
//        					System.out.println("Binding Adapter: " + r.getName());
//        					bind(r);
//        				});
//        				
//        				install(new JpaPersistModule("asb"));
//        				filter("/*").through(PersistFilter.class);
//        			}
//        		});
//                
                GuiceIntoHK2Bridge guiceBridge = locator.getService(GuiceIntoHK2Bridge.class);
//                guiceBridge.bridgeGuiceInjector(injector);
                guiceBridge.bridgeGuiceInjector(injector);
            }
        });
        //register(injector.getProvider(AdvancedCrnkFeature.class).get());
//        EntityManagerFactory emf = injector.getInstance(EntityManagerFactory.class);
    }
}
