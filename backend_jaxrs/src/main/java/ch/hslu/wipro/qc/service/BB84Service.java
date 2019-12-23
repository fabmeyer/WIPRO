package ch.hslu.wipro.qc.service;

/**
 * This class makes the BB84 modules accessible to both the REST call and other uses such as the MessagePackClient class
 * Mostly, one request calls just one method of the component. 
 * @author Adrian Althaus
 */


import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.google.inject.Singleton;

import ch.hslu.wipro.qc.components.BaseComparator;
import ch.hslu.wipro.qc.components.KeyComparator;
import ch.hslu.wipro.qc.components.KeyShortener;
import ch.hslu.wipro.qc.components.PhotonEmitter;
import ch.hslu.wipro.qc.components.PhotonReceiver;
import ch.hslu.wipro.qc.components.QuantumChannel;
import ch.hslu.wipro.qc.components.RandomBase;
import ch.hslu.wipro.qc.components.RandomBitString;

@Singleton
public class BB84Service {

	public static String getRandomBase(int n, float prob) {
		return RandomBase.getRandomBase(n, prob);
	}

	public static String emitPhoton(String base, String str) {
		return PhotonEmitter.emitPhoton(base, str);
	}

	public static String[] receivePhoton(String photons, String base, int noise, int eavesdropping) {
		// quantum channel with Alice and noise
		String[] result_quantumChannel = QuantumChannel.simulateQuantumChannel(photons, base, noise, eavesdropping);
		String photonList = result_quantumChannel[0];
		String stateString = result_quantumChannel[1]; 
		
		// Bob 
		String bitStringBob = PhotonReceiver.receivePhoton(photonList, base);
		String[] result = {bitStringBob, stateString};
		return result;
	}

	public static String compareBase(String base1, String base2) {
		return BaseComparator.compareBase(base1, base2);
	}

	public static void setSettings(Map<String, Object> settings, HttpServletRequest request) {
		for (String s: settings.keySet()){
			request.getSession().setAttribute(s, settings.get(s));  
		}
	}

	public static String[] shortenKey(String base1, String base2, String string_alice, String string_bob,
		String string_state) {
		String[] result = KeyShortener.shortenKey(base1, base2, string_alice, string_bob, string_state);
		return result;
	}

	public static String[] compareKey(String keyAlice, String keyBob, String state_string, int percentage) {
		String[] result = KeyComparator.compareKey(keyAlice, keyBob, state_string, percentage);
		return result;
	}

	public static String getRandomBitString(int stringLength, int prob) {
		return RandomBitString.getRandomBitString(stringLength, prob);
	}
}
