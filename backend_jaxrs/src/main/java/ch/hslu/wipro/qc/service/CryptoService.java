package ch.hslu.wipro.qc.service;

import com.google.inject.Singleton;

@Singleton
public class CryptoService {
	
	public static String encrypt(String message) {
		StringBuilder cyphertext = new StringBuilder(); 
		cyphertext.append(message); 
  		cyphertext = cyphertext.reverse(); 
		return cyphertext.toString();
	}

}
