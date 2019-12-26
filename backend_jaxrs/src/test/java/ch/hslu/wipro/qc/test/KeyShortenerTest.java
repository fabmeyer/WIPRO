package ch.hslu.wipro.qc.test;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import ch.hslu.wipro.qc.components.KeyShortener;

public class KeyShortenerTest {
	
	@Test
	public void shortenKeyTest() {
	String[] result =KeyShortener.shortenKey("+x++xx+x++", "++++x+x++x", "1010101001", "1010100000", "0000000000");
	assertEquals(result[0], "+_++x___+_");
	assertEquals(result[1], "11010");
	assertEquals(result[2], "11010");
	assertEquals(result[3], "00000");
	}
}
