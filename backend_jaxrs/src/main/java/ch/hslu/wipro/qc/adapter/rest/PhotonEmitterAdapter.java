package ch.hslu.wipro.qc.adapter.rest;


import javax.json.Json;
import javax.json.JsonObject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import ch.hslu.wipro.qc.service.BB84Service;

/*
 * TODO : inject encrytion with Guava
 * @Inject
	private CryptoService cryptoService;
 * 
 */

@Path( "/emitphoton/{base}/{str}" )
public class PhotonEmitterAdapter {
	@Context
	private HttpServletRequest request;

	@GET
	@Produces( MediaType.APPLICATION_JSON )
	public Response encrypt(@PathParam( "base" ) String base, @PathParam( "str" ) String str)
	{
		
		final String photonString = BB84Service.getPhotonString(base, str);
		JsonObject response = Json.createObjectBuilder()
				.add("photonString", photonString)
				.build();
		return Response.ok(response.toString()).build();
	}
	
	/*
	
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String encrypt_plain(@PathParam( "base" ) String base, @PathParam( "str" ) String str)
	{
		String response = BB84Service.getPhotonString(base, str);
		return response;
	}
	
	@GET
	@Produces(MediaType.TEXT_HTML)
	public String encrypt_html(@PathParam( "base" ) String base, @PathParam( "str" ) String str)
	{
		String response = BB84Service.getPhotonString(base, str);
		return "<html><body>"+response+"</body></html>";
	}
	
	@GET
	@Produces(MediaType.TEXT_XML)
	public String encrypt_xml(@PathParam( "base" ) String base, @PathParam( "str" ) String str)
	{
		String response = BB84Service.getPhotonString(base, str);
		return "<xml><response>"+response+"</response></xml>";	
		}

	*/

}
