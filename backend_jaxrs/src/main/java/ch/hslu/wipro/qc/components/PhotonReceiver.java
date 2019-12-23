package ch.hslu.wipro.qc.components;

import ch.hslu.wipro.qc.common.Base;

public class PhotonReceiver {
	/**
	 * Measures photons given a certain base
	 * 
	 * @param Photons, Base 
	 * @throws IllegalArgumentException
	 */
	public static String receivePhoton(String photons, String base) {
		String bitStringBob = "";

		String[] photonList = photons.split(",");
		if (photonList.length != base.length()) {
			throw new IllegalArgumentException("Photon list and base list are not of the same length");
		}	
		for (int i = 0; i < base.length(); i++) {

		float photon = Float.parseFloat(photonList[i]);
			String newPhoton = "0";
			if (Character.toString(base.charAt(i)).equals(Base.RECTILINEAR.toString())) {
				if ((photon >= 130.0f && photon < 140.0f)) { 
					newPhoton = "0";
				}
				if (photon >= 85.0f && photon < 95.0f) { 
					newPhoton = "1";
				}
				if (photon >= 40.0f && photon < 50.0f) { 
					newPhoton = "0";
				}
				if (photon >= -5.0f && photon < 0.0f) { 
					newPhoton = "0";
				}
			
			}
			if (Character.toString(base.charAt(i)).equals(Base.DIAGONAL.toString())) {
				if ((photon >= 130.0f && photon < 140.0f)) { 
					newPhoton = "1";
				}
				if (photon >= 85.0f && photon < 95.0f) { 
					newPhoton = "0";
				}
				if (photon >= 40.0f && photon < 50.0f) { 
					newPhoton = "0";
				}
				if (photon >= -5.0f && photon < 5.0f) { 
					newPhoton = "0";
				}		
				}
			bitStringBob += newPhoton;
		}
	return bitStringBob;
	}
}
