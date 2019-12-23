package ch.hslu.wipro.qc.components;

import java.lang.IllegalArgumentException;

public class BaseComparator {
	/**
	 * Compares two bases
	 * 
	 * @param Base Alice, Base Bob
	 * @throws IllegalArgumentException
	 */
	public static String compareBase(String base1, String base2) throws IllegalArgumentException {
		String compareString = "";
		if (base1.length() != base2.length()) {
			throw new IllegalArgumentException("Bases in arguments are not of the same length");
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
}
