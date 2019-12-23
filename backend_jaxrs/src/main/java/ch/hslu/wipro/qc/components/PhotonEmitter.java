package ch.hslu.wipro.qc.components;


import java.util.Arrays;
import java.util.stream.Collectors;

import ch.hslu.wipro.qc.common.Base;

public class PhotonEmitter {
	/**
	 * Returns a String of photons to be emitted (as comma-separated floats)
	 * 
	 * @param Alice's base, Alice's bitstring
	 * @throws IllegalArgumentException
	 */
	public static String emitPhoton(String base, String str) {
	if (base.length() != str.length()) {
		throw new IllegalArgumentException("Bases in arguments are not of the same length");
	} 
	String[] photonList = new String[base.length()];
	int StringLength = str.length();


	for (int i = 0; i < StringLength; i++) {
		String photonPolarization = "0.0";
		if (String.valueOf(base.charAt(i)).equals(Base.DIAGONAL.toString())) {
			photonPolarization = (String.valueOf(str.charAt(i)).equals("1")) ? "135.0"
					: "45.0" ;
		} 
		if (String.valueOf(base.charAt(i)).equals(Base.RECTILINEAR.toString())) {
			photonPolarization = (String.valueOf(str.charAt(i)).equals("1")) ? "90.0"
					: "0.0";
		}
		photonList[i] =  photonPolarization;

	}
	String photonString = Arrays.asList(photonList).stream().collect(Collectors.joining(","));
	return photonString;
	}
}
