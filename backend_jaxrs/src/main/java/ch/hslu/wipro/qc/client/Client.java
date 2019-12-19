package ch.hslu.wipro.qc.client;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.msgpack.MessagePack;
import org.msgpack.template.Templates;

//import com.google.common.util.concurrent.RateLimiter;

//import com.google.common.util.concurrent.RateLimiter;

import ch.hslu.wipro.qc.service.BB84Service;

public class Client {
   
    
	private static void simulateBB84Protocol(int strLength) throws IOException {
		
		//byte baseAlice[] = BB84Service.getRandomBaseString(strLength, 0.5f).getBytes();
		
		String bitstringAlice = BB84Service.getRandomBitString(strLength, 50);
	
		String baseBob = BB84Service.getRandomBaseString(strLength, 50);
		
		String baseAlice = BB84Service.getRandomBaseString(strLength, 50);
		
		String photonString = BB84Service.getPhotonString(baseAlice, bitstringAlice);

		
		/*
	    int c = 0;
	   
	    ByteArrayInputStream bInput = new ByteArrayInputStream(data);
	    while ((bInput.read()) != -1) {
	        System.out.println(((char) c));
	    }
	    */
	    
	    List<String> src = new ArrayList<String>();
	    src.add(bitstringAlice);
	    src.add(baseBob);
	    src.add(baseAlice);
	    src.add(photonString);

	    MessagePack msgpack = new MessagePack();
	    // Serialize
	    byte[] raw = msgpack.write(src);
	    
	    ByteArrayInputStream bInput = new ByteArrayInputStream(raw);
	    System.out.println(bInput.read());

	    // Deserialize directly using a template
	    //List<String> dst1 = msgpack.read(raw, Templates.tList(Templates.TString));
	    //rateLimiter.acquire();
	   // System.out.println(dst1.get(0));
	    	    
	}

	 public static void main(String[] args) throws IOException{
		/* 
		RateLimiter rateLimiter = RateLimiter.create(1.0);
		while (true) {
			rateLimiter.acquire(); // may wait
			simulateBB84Protocol(1);
		}
		 */
	}
}
