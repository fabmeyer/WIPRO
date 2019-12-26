package ch.hslu.wipro.qc.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

import ch.hslu.wipro.qc.common.Base;
import ch.hslu.wipro.qc.components.RandomBase;

public class RandomBaseTest {
	@Test
	public void testRandomBitStringLength() {
		String s = RandomBase.getRandomBase(100,0.5f);
		assertEquals(100, s.length());
	}
	
	@Test
	public void testRandomBitStringContent() {
		String s = RandomBase.getRandomBase(100,0.5f);
		int count = (int) s.chars().filter(c -> c == (Base.RECTILINEAR.toString().charAt(0))).count();
		assertTrue(count > 30);
	}
}