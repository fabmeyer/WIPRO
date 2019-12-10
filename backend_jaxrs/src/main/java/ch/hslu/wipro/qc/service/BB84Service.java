package ch.hslu.wipro.qc.service;

import java.util.Map;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;

import com.google.inject.Singleton;


@Singleton
public class BB84Service {
	
	public static String getRandomBitString(int stringLength, int prob, HttpServletRequest request) {

		//int n = request.getSession().getAttribute("length");
		String bitString = "";


		for (int i = 0; i < stringLength; i++) {
			Random random = new Random();
			double randomDouble = random.nextDouble();
			if (randomDouble <= prob/100f) {
				bitString += "1";
			} else {
				bitString += "0";
			}
		}
		return bitString;
	}

	public static String getRandomBaseString(int n, float prob) {
		String bitString = "";
		for (int i = 0; i < n; i++) {
			Random random = new Random();
			double randomDouble = random.nextDouble();
			if (randomDouble > prob/100f) {
				bitString += "x";
			} else {
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
		for (int i = 0; i < base.length(); i++) {
			if (String.valueOf(base.charAt(i)).equals("x")) {
				photonString += (String.valueOf(str.charAt(i)).equals("1")) ? "0" : "2";
			} else {
				photonString += (String.valueOf(str.charAt(i)).equals("1")) ? "1" : "3";
			}
		}
		return photonString;
	}

	public static String getPhotonString(String base, String str, float angle_var, float length_var) {
		if (base.length() != str.length()) {
			return null;
		} 
		String photonString = "";
		Random randomLength = new Random();
		double randomDoubleLength = randomLength.nextDouble() * length_var;
		int StringLength = str.length();
		StringLength = (int) Math
				.round(StringLength + (randomDoubleLength * StringLength * 2 - randomDoubleLength / 2));

		for (int i = 0; i < StringLength; i++) {
			Random random = new Random();
			double randomDouble = random.nextDouble() * angle_var;
			float angle_variance = 0f; // (float) randomDouble * 180 - 45;
			double shift = Math.pow(10, 2);
			angle_variance = (float) (Math.round(angle_variance * shift) / shift);
			float photonPolarization = 0;
			if (String.valueOf(base.charAt(i)).equals("x")) {
				photonPolarization = (String.valueOf(str.charAt(i)).equals("1")) ? 0 + angle_variance
						: 90 + angle_variance;
			} else {
				photonPolarization = (String.valueOf(str.charAt(i)).equals("1")) ? 45 + angle_variance
						: 135 + angle_variance;
			}
			photonString +=  photonPolarization;
			if (i < StringLength - 1) {
				photonString += ",";
			}
		}
		return photonString;
	}

	public static String getBitStringFromPhotons(String photons, String base) {
		String bitString = "";
		if (photons.length() != base.length()) {
			return null;
		}
		for (int i = 0; i < base.length(); i++) {
			if (String.valueOf(base.charAt(i)).equals("x")) {
				bitString += (String.valueOf(photons.charAt(i)).equals("0")) ? "1" : "0";
			} else {
				bitString += (String.valueOf(photons.charAt(i)).equals("1")) ? "1" : "0";
			}
		}
		return bitString;
	}

	public static String getBitStringFromPhotons(String photons, String base, int noise, float fp, float undetected) {
		String bitString = "";
		String[] photonList = photons.split(",");
		if (photonList.length != base.length()) {
			//return null;
		}
		for (int i = 0; i < base.length(); i++) {
			Random randomDouble= new Random();
			double randomDoubleNoise = randomDouble.nextDouble();
			
			Random randomFp = new Random();
			double randomDoubleFp= randomFp.nextDouble();
			
			float photon = Float.parseFloat(photonList[i]);

			if ((noise / 100f) <= randomDoubleNoise) {
				if (String.valueOf(base.charAt(i)).equals("x")) {
					bitString += ((photon > -5 && photon < 5)) ? "1" : "0";
				} else {
					bitString += ((photon > 40 && photon < 50)) ? "1" : "0";
				}
			}
			else {
				bitString += (randomDouble.nextDouble() > 0.5f) ? "1" : "0"; 
			}
			
			if (1 - fp >= randomDoubleFp) {
				//bitString += (randomDoubleUndetected >  0.5f) ? "1" : "0";
			}	
		}
		return bitString;
	}

	public static String compareBase(String base1, String base2) {
		String compareString = "";
		if (base1.length() != base2.length()) {
			return null;
		}
		for (int i = 0; i < base1.length(); i++) {
			if (String.valueOf(base1.charAt(i)).equals(String.valueOf(base2.charAt(i)))) {
				compareString += "1";
			} else {
				compareString += "0";
			}
		}
		return compareString;
	}

	public static void setSettings(Map<String, Object> settings, HttpServletRequest request) {
		for (String s: settings.keySet())  {
			request.getSession().setAttribute(s, 10);  
		}
		// TODO Auto-generated method stub
	}

	public static String[] shortenKey(String base1, String base2, String string_alice, String string_bob,
		HttpServletRequest request) {
		
		String compareBase = ""; 
		String commonKeyAlice = ""; 
		String commonKeyBob = ""; 

	
		for (int i = 0; i < base1.length(); i++) {
			if (String.valueOf(base1.charAt(i)).equals(String.valueOf(base2.charAt(i)))) {
				compareBase += base1.charAt(i);
				commonKeyAlice += string_alice.charAt(i);
				commonKeyBob += string_bob.charAt(i);

			} else {
				compareBase += "_";
			}

		}
		
		String[] result = {compareBase, commonKeyAlice, commonKeyBob};
		return result;
		
		// TODO Auto-generated method stub
	}

	public static String[] compareKey(String keyAlice, String keyBob, int percentage) {
		Random randomDouble= new Random();
		assert(keyAlice.length() == keyBob.length());
		// TODO Auto-generated method stub
		String restStringAlice = "";
		String restStringBob = "";
		int bitsTested = 0;
		int matches = 0;
		for (int i = 0; i < keyAlice.length(); i++ ){ 
			if (percentage <= (randomDouble.nextFloat() * 100)) {
				if (String.valueOf(keyAlice.charAt(i)).equals(String.valueOf(keyBob.charAt(i)))) {
					matches++;
				}
				bitsTested++;	
				restStringAlice += keyAlice.charAt(i);
				restStringBob += keyBob.charAt(i);
			}
		}
		String[] result = {restStringAlice, restStringBob, String.format("%.2f", ((float) matches * 100.0f / bitsTested ))};
		return result;
	}
}
