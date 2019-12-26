package ch.hslu.wipro.qc.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

import ch.hslu.wipro.qc.components.RandomBitString;

public class RandomStringTest {
	
	@Test
	public void testRandomBitStringLength() {
		String s = RandomBitString.getRandomBitString(100,50);
		assertEquals(100, s.length());
	}
	
	@Test
	public void testRandomBitStringContent() {
		String s = RandomBitString.getRandomBitString(100,50);
		int count = (int) s.chars().filter(c -> c == '1').count();
		assertTrue(count > 30);
	}
}
