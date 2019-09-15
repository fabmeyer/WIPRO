package ch.hslu.wipro.qc.config.crnk;

import javax.inject.Inject;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.core.Feature;
import javax.ws.rs.core.FeatureContext;

import org.glassfish.jersey.jackson.JacksonFeature;

import com.google.inject.Injector;
import com.google.inject.Provider;


import io.crnk.core.boot.CrnkProperties;
import io.crnk.guice.GuiceServiceDiscovery;
import io.crnk.jpa.JpaModuleConfig;
import io.crnk.jpa.meta.JpaMetaProvider;
import io.crnk.meta.MetaModule;
import io.crnk.meta.MetaModuleConfig;
import io.crnk.meta.provider.resource.ResourceMetaProvider;
import io.crnk.rs.CrnkFeature;
import io.crnk.rs.JsonApiResponseFilter;
import io.crnk.rs.JsonapiExceptionMapperBridge;
import io.crnk.security.ResourcePermission;
import io.crnk.security.SecurityConfig;
import io.crnk.security.SecurityConfig.Builder;
import io.crnk.security.SecurityModule;
import io.crnk.validation.ValidationModule;

public class AdvancedCrnkFeature implements Feature {

//	@Inject
//	private Provider<EntityManager> emp;

	@Inject
	private Provider<EntityManagerFactory> emfp;
	
	@Inject
	private Injector injector;
	
//	@Inject
//	private GuiceTransactionRunner transactionRunner;
	
	
	@Override
	public boolean configure(FeatureContext context) {
		context.property(CrnkProperties.NULL_DATA_RESPONSE_ENABLED, Boolean.toString(false));
		context.property(CrnkProperties.ALLOW_UNKNOWN_PARAMETERS, Boolean.toString(true));
		
		CrnkFeature feature = new CrnkFeature();
		feature.getBoot().setServiceDiscovery(new GuiceServiceDiscovery(injector));
        feature.setSecurityEnabled(true);
        MetaModuleConfig mConfig = new MetaModuleConfig();
        mConfig.addMetaProvider(new JpaMetaProvider(emfp.get()));
        mConfig.addMetaProvider(new ResourceMetaProvider());
        
    
        Builder builder = SecurityConfig.builder();
        

        builder.permitRole("Guest", ResourcePermission.ALL);



    	// expose all entitities from provided EntityManagerFactory

    	MetaModule metaModule = MetaModule.createServerModule(mConfig);
    	ValidationModule vModule = ValidationModule.create();
        feature.addModule(metaModule);
        feature.addModule(vModule);
        feature.addModule(SecurityModule.newServerModule(builder.build()));
        
        
        context.register(new JsonApiResponseFilter(feature));
        context.register(new JsonapiExceptionMapperBridge(feature));
        context.register(new JacksonFeature());
        
        context.register(feature);
        
        
		return true;
	}


	
}