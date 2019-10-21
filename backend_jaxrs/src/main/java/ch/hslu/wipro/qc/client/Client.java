package ch.hslu.wipro.qc.client;

import java.io.ByteArrayInputStream;

import ch.hslu.wipro.qc.service.BB84Service;

public class Client {
	
	private static void streamRandomString() {
		byte data[] = BB84Service.getRandomBaseString("1024").getBytes();
	    for (int index = 0; index < data.length; index++) {
	        System.out.print((char) data[index] + "   ");
	    }
	    int c = 0;
	    ByteArrayInputStream bInput = new ByteArrayInputStream(data);
	    while ((bInput.read()) != -1) {
	        System.out.println(((char) c));
	    }
	}

	 public static void main(String[] args){
		streamRandomString();
	}
}
