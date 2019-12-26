package ch.hslu.wipro.qc.filter;


import java.lang.reflect.InvocationTargetException;
import java.util.Enumeration;

import javax.servlet.Filter;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;

import org.apache.commons.beanutils.BeanUtils;

public abstract class AbstractFilter implements Filter {

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
        Enumeration<String> paramNames = filterConfig.getInitParameterNames();
        while (paramNames.hasMoreElements()) {
            String paramName = paramNames.nextElement();
            try {
				BeanUtils.setProperty(this, paramName, filterConfig.getInitParameter(paramName));
			} catch (IllegalAccessException | InvocationTargetException e) {
				e.printStackTrace();
			}
        }
	}
	
	@Override
	public void destroy() {
	}
}
