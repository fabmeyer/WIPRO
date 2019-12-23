package ch.hslu.wipro.qc.components;

public class KeyShortener {
	/**
	 * Calculates the common valid keys in Bob's and Alice's Bitstring
	 * 
	 * @param Base Alice, Base Bob, Bitstring Alice, Bitstring Bob
	 * @throws IllegalArgumentException
	 */
	public static String[] shortenKey(String base1, String base2, String string_alice, String string_bob,
			String string_state) {		
			String compareBase = ""; 
			String commonKeyAlice = ""; 
			String commonKeyBob = ""; 
			String stateString = "";
			for (int i = 0; i < base1.length(); i++) {
				if (String.valueOf(base1.charAt(i)).equals(String.valueOf(base2.charAt(i)))) {
					compareBase += base1.charAt(i);
					commonKeyAlice += string_alice.charAt(i);
					commonKeyBob += string_bob.charAt(i);
					stateString += string_state.charAt(i);
				} else {
					compareBase += "_";
				}
			}
			String[] result = {compareBase, commonKeyAlice, commonKeyBob, stateString};
			return result;
	}
} 
