package ch.hslu.wipro.qc.components;

import java.util.Random;

import ch.hslu.wipro.qc.common.Base;

public class RandomBase{
	/**
	 * Generates a string of random bases (consisting of "x" and "+")
	 * 
	 * @param length, ratio of rectilinear and diagonal bases
	 */
	public static String getRandomBase(int n, float prob) {
		String bitString = "";
		for (int i = 0; i < n; i++) {
			Random random = new Random();
			double randomDouble = random.nextDouble();
			if (randomDouble > prob/100f) {
				bitString += Base.RECTILINEAR.toString();
			} else {
				bitString += Base.DIAGONAL.toString();
			}
		}
		return bitString;
	}
}
