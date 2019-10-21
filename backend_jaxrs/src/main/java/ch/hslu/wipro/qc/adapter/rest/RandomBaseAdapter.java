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

@Path( "/randombase/{str}" )
public class RandomBaseAdapter { // implements CryptoInterface

	@Context
	private HttpServletRequest request;
	
	
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String encrypt_plain(@PathParam( "str" ) String str)
	{
		String response = BB84Service.getRandomBaseString(str);
		return response;
	}
	
	@GET
	@Produces(MediaType.TEXT_HTML)
	public String encrypt_html(@PathParam( "str" ) String str)
	{
		String response = BB84Service.getRandomBaseString(str);
		return "<html><body>"+response+"</body></html>";
	}
	
	@GET
	@Produces(MediaType.TEXT_XML)
	public String encrypt_xml(@PathParam( "str" ) String str)
	{
		String response = BB84Service.getRandomBaseString(str);
		return "<xml><response>"+response+"</response></xml>";	
		}

	@GET
	@Produces( MediaType.APPLICATION_JSON )
	public String encrypt(@PathParam( "str" ) String str)
	{
		String response = BB84Service.getRandomBaseString(str);
		return response;
		}
}
