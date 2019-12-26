package ch.hslu.wipro.qc.config;

/**
 * Jersey Configuration. 
 * @author Adrian Althaus
 */

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

import ch.hslu.wipro.qc.service.BB84Service;

public class JerseyResourceConfiguration extends ResourceConfig {

	@Inject
    public JerseyResourceConfiguration(ServiceLocator locator, @Context ServletContext servletContext) {
		Injector injector = (Injector) servletContext.getAttribute(Injector.class.getName());

		register(RolesAllowedDynamicFeature.class);
        register(new AbstractBinder() {
            @Override
            protected void configure() {
            	GuiceBridge.getGuiceBridge().initializeGuiceBridge(locator);
                GuiceIntoHK2Bridge guiceBridge = locator.getService(GuiceIntoHK2Bridge.class);
                guiceBridge.bridgeGuiceInjector(injector);
            }
        });
        
        
        register(injector.getProvider(BB84Service.class).get());

    }
}
