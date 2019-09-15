package ch.hslu.wipro.qc.config.transaction;

import java.util.concurrent.Callable;

import com.google.inject.Singleton;
import com.google.inject.persist.Transactional;

@Singleton
@Transactional
public class GuiceTransactionRunnerImpl {

	public <T> T doInTransaction(Callable<T> callable) {
//		EntityTransaction tx = em.getTransaction();
		try {
//			if(!tx.isActive())
//				tx.begin();
			
			T result = callable.call();
			
//			if ( !tx.getRollbackOnly() )
//				tx.commit();
			
			return result;
		} catch (RuntimeException e) {
			throw e;
		} catch (Exception e) {
			throw new IllegalStateException(e);
		} finally {
//			if ( tx.isActive() )
//				tx.rollback();
			
//			em.close();
		}
	}
}
