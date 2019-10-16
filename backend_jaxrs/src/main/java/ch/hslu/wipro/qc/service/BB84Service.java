package ch.hslu.wipro.qc.service;

import java.util.Random;

import com.google.inject.Singleton;

@Singleton
public class BB84Service {
	public static String getRandomBitString(String n) {
		String bitString = "";
		for (int i = 0; i < Integer.valueOf(n); i++ ) {
            Random random = new Random();
            double randomDouble = random.nextDouble();
            if(randomDouble > 0.5) {
            	bitString += "1";            	
            }
            else {
            	bitString += "0"; 
            }
		}
		return bitString;
	}
}
