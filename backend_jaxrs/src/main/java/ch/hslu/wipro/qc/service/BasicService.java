package ch.hslu.wipro.qc.service;

import java.beans.IntrospectionException;
import java.beans.PropertyDescriptor;
import java.io.Serializable;
import java.lang.reflect.InvocationTargetException;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.inject.Inject;

import org.dozer.DozerBeanMapperSingletonWrapper;
import org.dozer.Mapper;

import com.google.inject.Singleton;
import com.google.inject.persist.Transactional;

// import ch.asb.dao.BasicDao;

// Nur importieren, falls Dao gewünscht


@Singleton
public class BasicService implements Serializable
{
	/**
	 * 
	 */
	private static final long serialVersionUID = -3244252108254455978L;
	/*
	@Inject
	private BasicDao basicDao;
	
	public List< ? > getAvailableListByType( Class< ? > entityType)
	{
		return basicDao.findAll( entityType );
	}

	@Transactional
	public Object persist( Object persistableObject, Class< ? > persistableSubClass ) throws InstantiationException, IllegalAccessException
	{
		Object existingObject = findById( persistableObject, persistableSubClass );
		synchronize( persistableObject, existingObject );
		return basicDao.persist( existingObject );
	}
	
	@Transactional
	public Object persist( Object persistableObject ) throws InstantiationException, IllegalAccessException
	{
		return basicDao.persist( persistableObject );
	}
	
	@Transactional
	public Object persist( Integer id, Object persistableObject, Class< ? > persistableSubClass ) throws InstantiationException, IllegalAccessException
	{
		Object existingObject = findById( id, persistableSubClass );
		synchronize( persistableObject, existingObject );
		return basicDao.persist( existingObject );
	}
	
	public Object findById( Integer id, Class< ? > subClass ) throws InstantiationException, IllegalAccessException
	{
		return basicDao.findById( subClass, id );
	}

	private void synchronize( Object sourceObject, Object targetObject )
	{
		Mapper mapper = DozerBeanMapperSingletonWrapper.getInstance();
		mapper.map( sourceObject, targetObject );
	}

	@Transactional
	public void remove( Object removableObject, Class< ? > removableSubClass ) throws InstantiationException, IllegalAccessException
	{
		basicDao.remove( findById(removableObject, removableSubClass) );
	}
	
	@Transactional
	public void remove( Integer removableObject, Class< ? > removableSubClass ) throws InstantiationException, IllegalAccessException
	{
		basicDao.remove( findById(removableObject, removableSubClass) );
	}
	
	private Object findById( Object obj, Class< ? > subClass ) throws InstantiationException, IllegalAccessException {
		Object existingObject = null;
		try
		{
			existingObject = basicDao.findById( subClass, new PropertyDescriptor("id", obj.getClass()).getReadMethod().invoke(obj) );
		}
		catch ( IllegalAccessException | IllegalArgumentException | InvocationTargetException | IntrospectionException e )
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return existingObject == null ? subClass.newInstance() : existingObject;
	}
	
	public String generateFileNameByLastSlug(Class< ? > clazz, String slug) {
		String newFileName = "";
		String lastSlug = basicDao.findFileNameBySlugLike(clazz, slug);
		
		if ( lastSlug == null )
			newFileName = slug + "-000";
		else {
			Matcher matcher = Pattern.compile( "([a-zA-Z0-9-]+)([\\d]{3})" ).matcher( lastSlug );
			
			if ( matcher.find() )
				newFileName = slug + "-" + String.format("%03d", (Integer.valueOf( matcher.group( 2 ) )+1) );
			else
				newFileName = slug + "-000";
		}
		return newFileName;
	}
	

	public BasicDao getBasicDao()
	{
		return basicDao;
	}
	*/
}
