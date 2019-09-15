package ch.hslu.wipro.qc.adapter;

import java.util.List;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.NotFoundException;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import ch.hslu.wipro.qc.service.BasicService;

@Produces(MediaType.APPLICATION_JSON)
public abstract class AbstractCrudResource<T> {
	
	@Inject
	public BasicService basicService;
	
	private final Class<T> typeParameterClass;
//
//    public AbstractCrudResource(Class<T> typeParameterClass, BasicService basicService) {
//        this.typeParameterClass = typeParameterClass;
//        this.basicService = basicService;
//    }
//    
    public AbstractCrudResource(Class<T> typeParameterClass) {
        this.typeParameterClass = typeParameterClass;
    }
	
 
//    @Path("/{id}")
//    @GET
//    public abstract T getItem(@PathParam("id") String id);
// 
//    @POST
//    @Consumes(MediaType.APPLICATION_JSON)
//    public abstract T create(T item);
// 
//    @Path("/{id}")
//    @POST
//    @Consumes(MediaType.APPLICATION_JSON)
//    public abstract T update(@PathParam("id") String id, T updatedItem);
// 
//    @Path("/{id}")
//    @DELETE
//    public abstract void delete(@PathParam("id") String id);
// 
//    @GET
//    public abstract List<?> list();
    
    
    /*
    @Path("/{id}")
    @GET
    public T getItem(@PathParam("id") String id) {
    	try {
    		T result = (T) basicService.findById(Integer.valueOf(id), typeParameterClass);
    		
    		if (result == null) {
    			throw new NotFoundException();
    		}
    		
    		return result;
    	} catch (NumberFormatException | InstantiationException | IllegalAccessException e) {
    		e.printStackTrace();
    	}
    	throw new NotFoundException();
    }
    
    @RolesAllowed({"Admin", "Betreiber", "Provider"})
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public T create(T item) {
    	try {
    		return (T) basicService.persist(item);
    	} catch (InstantiationException | IllegalAccessException e) {
    		e.printStackTrace();
    	}
    	return null;
    }
    
    @RolesAllowed({"Admin", "Betreiber", "Provider"})
    @Path("/{id}")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public T update(@PathParam("id") String id, T updatedItem) {
    	try {
    		return (T) basicService.persist(Integer.valueOf(id), updatedItem, typeParameterClass);
    	} catch (NumberFormatException | InstantiationException | IllegalAccessException e) {
    		e.printStackTrace();
    	}
    	return null;
    }
    
    @RolesAllowed({"Admin", "Betreiber", "Provider"})
    @Path("/{id}")
    @DELETE
    public void delete(@PathParam("id") String id) {
    	try {
    		basicService.remove(Integer.valueOf(id), typeParameterClass);
    	} catch (InstantiationException | IllegalAccessException e) {
    		e.printStackTrace();
    	}
    }
    
    @GET
    public List<?> list() {
    	return basicService.getAvailableListByType(typeParameterClass);
    }
    */
}