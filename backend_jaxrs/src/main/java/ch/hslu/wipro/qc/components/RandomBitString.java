package ch.hslu.wipro.qc.components;

import java.util.Random;

public class RandomBitString{
	/**
	 * Generates a random bitstring
	 * @param Length, ratio of '0' and '1'
	 */
	public static String getRandomBitString(int stringLength, int prob) {
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
}
