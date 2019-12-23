package ch.hslu.wipro.qc.common;


public enum BitState {
	OK(0), EVE_CORRECT_BASE(1), EVE_WRONG_BASE(2), NOISE(3);
	 
	private int value;
	   private BitState(int value)
	   {
	      this.value = value;
	   }

	   public String toString()
	   {
	      return ""+this.value;
	   }
}

