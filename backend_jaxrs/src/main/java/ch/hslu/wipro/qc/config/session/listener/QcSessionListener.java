package ch.hslu.wipro.qc.config.session.listener;

import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

public class QcSessionListener implements HttpSessionListener {

	@Override
	public void sessionCreated(HttpSessionEvent se) {
		HttpSession session = se.getSession();
		System.out.println(String.format("Session Created: %s", session.getId()));
	}

	@Override
	public void sessionDestroyed(HttpSessionEvent se) {
		HttpSession session = se.getSession();
		long now = new java.util.Date().getTime();
		boolean timeout = (now - session.getLastAccessedTime()) >= ((long)session.getMaxInactiveInterval() * 1000L);
		
		System.out.println(String.format("Session Destroyed: %s, Timeout: %s", session.getId(), timeout));
	}

}

