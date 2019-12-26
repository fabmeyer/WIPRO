package ch.hslu.wipro.qc.test;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

import ch.hslu.wipro.qc.components.KeyComparator;

public class KeyComparatorTest {
	@Test
	public void compareKeyTest() {
		String[] result = KeyComparator.compareKey("101000001", "101000000", "0000000000", 20);
		assertTrue(result[0].length() == result[1].length());
		assertTrue(result[0].length() >= 3);
	}
}
