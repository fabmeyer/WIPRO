package ch.hslu.wipro.qc.test;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import ch.hslu.wipro.qc.components.PhotonEmitter;
import ch.hslu.wipro.qc.components.PhotonReceiver;
import ch.hslu.wipro.qc.components.RandomBase;

public class PhotonEmitterTest{
	
	@Test
	public void photonReceiverTest() {
		String result = PhotonEmitter.emitPhoton("x+x+x+x+", "00011101");
		assertEquals(result, "45.0,0.0,45.0,90.0,135.0,90.0,45.0,90.0");
	}
}
