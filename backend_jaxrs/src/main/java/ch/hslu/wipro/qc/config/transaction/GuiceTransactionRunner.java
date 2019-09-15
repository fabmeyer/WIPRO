package ch.hslu.wipro.qc.config.transaction;

import java.util.concurrent.Callable;

import javax.inject.Inject;

import com.google.inject.Singleton;

import io.crnk.core.engine.transaction.TransactionRunner;

@Singleton
public class GuiceTransactionRunner implements TransactionRunner {

	@Inject
	private GuiceTransactionRunnerImpl impl;
	
//	@Inject
//	private AdvancedCrnkFeature feature;
	
	@Override
	public <T> T doInTransaction(Callable<T> callable) {
		try {
//			feature.getJpaModule().setEntityManager(feature.getJpaModule().getEntityManagerFactory().createEntityManager());
			return impl.doInTransaction(callable);//, feature.getJpaModule().getEntityManager());
		} catch (Exception e) {
			// unwrap since not usable, cause more interesting
			// (validationException, etc.)
			Throwable cause = e.getCause();
			if (cause instanceof RuntimeException) {
				throw (RuntimeException) cause;
			}
			throw e;
		}
	}
}