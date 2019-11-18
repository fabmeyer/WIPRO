package ch.hslu.wipro.qc.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class OptionsAndSessionInitFilter extends AbstractFilter {

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		String method = ((HttpServletRequest) request).getMethod();
		HttpServletResponse resp = (HttpServletResponse) response;
//		resp.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
//		resp.setHeader("Access-Control-Allow-Credentials", "true");
//		resp.setHeader("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-CSRF-Token");
		
		if (method.equalsIgnoreCase("options"))
			resp.setStatus(HttpServletResponse.SC_OK);
		else
			((HttpServletRequest)request).getSession();

		chain.doFilter(request, response);
	}

}
