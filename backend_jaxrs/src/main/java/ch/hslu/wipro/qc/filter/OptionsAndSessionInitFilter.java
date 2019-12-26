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
		if (method.equalsIgnoreCase("options"))
			resp.setStatus(HttpServletResponse.SC_OK);
		else
			((HttpServletRequest)request).getSession();

		chain.doFilter(request, response);
	}

}
