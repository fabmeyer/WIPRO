package ch.hslu.wipro.qc.client;

import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

public class Settings implements HttpSessionListener {

	@Override
	public void sessionCreated(HttpSessionEvent se) {
		HttpSession session = se.getSession();
		System.out.println(String.format("Session Created: %s", session.getId()));
		session.setAttribute("rate", 3);
		session.setAttribute("channel_noise", 0);
		session.setAttribute("channel_error", 0);
	}

	
	@Override
	public void sessionDestroyed(HttpSessionEvent se) {
		HttpSession session = se.getSession();
		long now = new java.util.Date().getTime();
		boolean timeout = (now - session.getLastAccessedTime()) >= ((long)session.getMaxInactiveInterval() * 1000L);
		
		
		System.out.println(String.format("Session Destroyed: %s, Timeout: %s", session.getId(), timeout));
	}

}