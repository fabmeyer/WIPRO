package ch.hslu.wipro.qc.common;


public enum Base {
	DIAGONAL("x"), RECTILINEAR("+");
	 
	private String value;
	   private Base(String value)
	   {
	      this.value = value;
	   }

	   public String toString()
	   {
	      return this.value;
	   }
}

