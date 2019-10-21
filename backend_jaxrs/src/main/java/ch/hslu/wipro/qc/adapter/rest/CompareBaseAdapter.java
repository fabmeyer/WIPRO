package ch.hslu.wipro.qc.adapter.rest;


import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import ch.hslu.wipro.qc.service.BB84Service;

/*
 * TODO : inject encrytion with Guava
 * @Inject
	private CryptoService cryptoService;
 * 
 */

@Path( "/comparebase/{base1}/{base2}" )
public class CompareBaseAdapter { // implements CryptoInterface

	@Context
	private HttpServletRequest request;
	
	/*
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String encrypt_plain(@PathParam( "base1" ) String base1, @PathParam( "base2" ) String base2)
	{
		String response = BB84Service.compareBase(base1, base2);
		return response;
	}
	
	@GET
	@Produces(MediaType.TEXT_HTML)
	public String encrypt_plain(@PathParam( "base1" ) String base1, @PathParam( "base2" ) String base2)
	{
		String response = BB84Service.compareBase(base1, base2);
		return "<html><body>"+response+"</body></html>";
	}
	
	@GET
	@Produces(MediaType.TEXT_XML)
	public String encrypt_plain(@PathParam( "base1" ) String base1, @PathParam( "base2" ) String base2)
	{
		String response = BB84Service.compareBase(base1, base2);
		return "<xml><response>"+response+"</response></xml>";	
		}

	*/
	
	@GET
	@Produces( MediaType.APPLICATION_JSON )
	public String encrypt_plain(@PathParam( "base1" ) String base1, @PathParam( "base2" ) String base2)
	{
		String response = BB84Service.compareBase(base1, base2);
		return response;
		}
}
