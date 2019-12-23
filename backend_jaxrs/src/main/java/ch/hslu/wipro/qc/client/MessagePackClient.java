package ch.hslu.wipro.qc.client;

/**
 * This class is an example of how to call the BB84 functions and store them in the MessagePack format
 * @author Adrian Althaus
 */


import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.msgpack.MessagePack;
import org.msgpack.template.Templates;
import org.slf4j.Logger;

import com.google.common.util.concurrent.RateLimiter;

import ch.hslu.wipro.qc.service.BB84Service;

public class MessagePackClient {
   
	private static void simulateQuantumExchange(float rate, int strLength) throws IOException {
	
		
		RateLimiter rateLimiter = RateLimiter.create(rate);
		String bitstringAlice = BB84Service.getRandomBitString(strLength, 50);
		String baseAlice = BB84Service.getRandomBase(strLength, 0.5f);
		String photonAlice = BB84Service.emitPhoton(baseAlice, bitstringAlice);
		String baseBob = BB84Service.getRandomBase(strLength, 0.5f);
		String resultBob = BB84Service.receivePhoton(photonAlice, baseBob, 0, 0)[0];

		int i = 0;
		
		while (i < bitstringAlice.length()) {
	    System.out.println("printing something");
			
	    //List<String> src = new ArrayList<String>();
	    List<Byte> src = new ArrayList<Byte>();
	    rateLimiter.acquire(); 								// fixed-size array 
	    // Alice's data
	    src.add((byte)(bitstringAlice.charAt(i))); 	// Alice's bit 
	    src.add((byte)(baseAlice.charAt(i)));		// Alice's base
	    src.add((byte)(photonAlice.charAt(i)));		// Alice's polarization

	    // Bob's data
	    src.add((byte)(baseBob.charAt(i)));			// Bob's base
	    src.add((byte)(resultBob.charAt(i)));		// Bob's inferred bit

	    MessagePack msgpack = new MessagePack();
	   
	    // Serialize
	    byte[] raw = msgpack.write(src);
	    
	    ByteArrayInputStream bInput = new ByteArrayInputStream(raw);
	    System.out.println(bInput.read());

	    // Deserialize directly using a template
		List<Byte> bb84Data = msgpack.read(raw, Templates.tList(Templates.TByte));
	    rateLimiter.acquire();
	    byte byte_bitAlice = bb84Data.get(0);
	    byte byte_baseAlice = bb84Data.get(1);
	    byte byte_photonAlice = bb84Data.get(2);
	    byte byte_baseBob = bb84Data.get(3);
	    byte byte_resultBob = bb84Data.get(4);
	    // now do something with those values
		}
	    	    
	}

	 public static void main(String[] args) throws IOException{
		 System.out.println("printing something");
		 simulateQuantumExchange(1.0f, 200);
	}
}
