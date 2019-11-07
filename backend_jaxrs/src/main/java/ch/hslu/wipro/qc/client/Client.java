package ch.hslu.wipro.qc.client;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


import org.msgpack.MessagePack;
import org.msgpack.template.Templates;

import ch.hslu.wipro.qc.service.BB84Service;

public class Client {
	
	private static void streamRandomString() throws IOException {
		/*
		byte data[] = BB84Service.getRandomBaseString("1024").getBytes();
	    for (int index = 0; index < data.length; index++) {
	        System.out.print((char) data[index] + "   ");
	    }
	    int c = 0;
	    ByteArrayInputStream bInput = new ByteArrayInputStream(data);
	    while ((bInput.read()) != -1) {
	        System.out.println(((char) c));
	    }
	    
	    */

	    
	    List<String> src = new ArrayList<String>();
	    src.add(BB84Service.getRandomBitString(1024, 0.5f));

	    MessagePack msgpack = new MessagePack();
	    // Serialize
	    byte[] raw = msgpack.write(src);

	    // Deserialize directly using a template
	    List<String> dst1 = msgpack.read(raw, Templates.tList(Templates.TString));
	    System.out.println(dst1.get(0));
	}

	 public static void main(String[] args) throws IOException{
		streamRandomString();
	}
}
