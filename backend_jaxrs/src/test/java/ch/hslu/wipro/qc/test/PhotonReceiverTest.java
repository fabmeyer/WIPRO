package ch.hslu.wipro.qc.test;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import ch.hslu.wipro.qc.components.PhotonReceiver;
import ch.hslu.wipro.qc.components.RandomBase;

public class PhotonReceiverTest{
	
	@Test
	public void photonReceiverTest() {
		String result = PhotonReceiver.receivePhoton("0.0,0.0,45.0,45.0,90.0,90.0,135.0,135.0", "x+x+x+x+");
		assertEquals(result, "00000110");
	}

}
