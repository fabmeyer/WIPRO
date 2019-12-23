package ch.hslu.wipro.qc.components;

import java.util.Arrays;
import java.util.Random;

import ch.hslu.wipro.qc.common.BitState;

public class KeyComparator {
	/**
	 * Compares two keys to be shortened by n percent
	 * 
	 * @param String Alice, String Bob, String with noise and eavesdropping information, amount to get cut off
	 * @throws IllegalArgumentException
	 */
	public static String[] compareKey(String keyAlice, String keyBob, String state_string, int percentage) {
	Random randomDouble = new Random();
	assert(keyAlice.length() == keyBob.length());
	// TODO Auto-generated method stub
	String restStringAlice = "";
	String restStringBob = "";
	String colorString = "";

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
			colorString += state_string.charAt(i);
		}
	}
	String[] result = {restStringAlice, restStringBob, String.format("%.2f", ((float) matches * 100.0f / bitsTested )), colorString};
	return result;
}
}