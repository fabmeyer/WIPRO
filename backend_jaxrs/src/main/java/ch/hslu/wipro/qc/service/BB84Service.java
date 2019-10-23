package ch.hslu.wipro.qc.service;

import java.util.Random;

import com.google.inject.Singleton;

@Singleton
public class BB84Service {
	public static String getRandomBitString(int n) {
		String bitString = "";
		for (int i = 0; i < n; i++ ) {
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

	public static String getRandomBaseString(int n) {
		String bitString = "";
		for (int i = 0; i < n; i++ ) {
            Random random = new Random();
            double randomDouble = random.nextDouble();
            if(randomDouble > 0.5) {
            	bitString += "x";            	
            }
            else {
            	bitString += "+"; 
            }
		}
		return bitString;
	}

	public static String getPhotonString(String base, String str) {
		String photonString = "";
		if (base.length() != str.length()) {
			return null;
		}
		for (int i=0; i< base.length(); i++) {
			if (String.valueOf(base.charAt(i)).equals("x")) {
				photonString += (String.valueOf(str.charAt(i)).equals("1")) ? "0" : "2"; 
			}
			else {
				photonString += (String.valueOf(str.charAt(i)).equals("1")) ? "1" : "3"; 	
			}
		}	
		return photonString;
	}

	public static String getBitStringFromPhotons(String photons, String base) {
		String bitString = "";
		if (photons.length() != base.length()) {
			return null;
		}
		for (int i=0; i< base.length(); i++) {
			if (String.valueOf(base.charAt(i)).equals("x")) {
				bitString += (String.valueOf(photons.charAt(i)).equals("0")) ? "1" : "0"; 
			}
			else {
				bitString += (String.valueOf(photons.charAt(i)).equals("1")) ? "1" : "0"; 	
			}
		}	
		return bitString;
	}

	public static String compareBase(String base1, String base2) {
		String compareString = "";
		if (base1.length() != base2.length()) {
			return null;
		}
		for (int i=0; i< base1.length(); i++) {
			if (String.valueOf(base1.charAt(i)).equals(String.valueOf(base2.charAt(i)))) {
				compareString += "1";	
			}
			else {
				compareString += "0";	
			}
		}	
		return compareString;
	}
}
