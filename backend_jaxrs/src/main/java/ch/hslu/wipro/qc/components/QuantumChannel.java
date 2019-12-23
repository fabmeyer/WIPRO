package ch.hslu.wipro.qc.components;

import java.util.Arrays;
import java.util.Random;
import java.util.stream.Collectors;

import ch.hslu.wipro.qc.common.Base;
import ch.hslu.wipro.qc.common.BitState;

public class QuantumChannel {
	
	/**
	 * Simulates the bad influences in the quantum channel (noise and eavesdropping)
	 * 
	 * @param Photon String, Eve's base string, Noise, Eavesdropping
	 */
	public static String[] simulateQuantumChannel(String photons, String base, int noise, int eavesdropping) {
		String stateString = ""; 
		String[] photonList = photons.split(",");
		if (photonList.length != base.length()) {
			throw new IllegalArgumentException("Photon list and base list are not of the same length");
		}
		Random random= new Random();
		
		/* Channel: Noise and Eve */
		String[] stringPolarizations = {"0.0", "45.0", "90.0", "135.0"};
		
		for (int i = 0; i < base.length(); i++) {
			int state = Integer.parseInt(BitState.OK.toString());			
			if ((eavesdropping / 100f) >= random.nextDouble()) {
				
			 String randomBaseAlice = RandomBase.getRandomBase(1, 0.5f);
			 if (String.valueOf(base.charAt(i)).equals(randomBaseAlice)){
				 state = Integer.parseInt(BitState.EVE_CORRECT_BASE.toString().toString());
			 }
			 else {
				 if (randomBaseAlice.equals(Base.DIAGONAL.toString())) {
					 photonList[i] = "90";
				 }
				 else {
					 photonList[i] = "45"; 
				 }
				 state = Integer.parseInt(BitState.EVE_WRONG_BASE.toString());
			 }
			} 

			if ((noise / 100f) >= random.nextDouble()) {
				photonList[i] =  stringPolarizations[random.nextInt(4)];
				state = Integer.parseInt(BitState.NOISE.toString());
			}
			stateString += state;
		}
		String newPhotonList = Arrays.asList(photonList).stream().collect(Collectors.joining(","));
		String[] result = {newPhotonList, stateString};
		return result;
	}
}
