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

@Path( "/receivephoton/{photons}/{base}/{fp}/{undetected}" )
public class PhotonReceiverParamAdapter {
	@Context
	private HttpServletRequest request;
	
	@GET
	@Produces( MediaType.APPLICATION_JSON )
	public Response encrypt_plain(@PathParam( "photons" ) String photons, @PathParam( "base" ) String base, @PathParam("fp") float fp, @PathParam("undetected") float undetected )
	{
		final String bitString = BB84Service.getBitStringFromPhotons(photons, base, fp, undetected);
		JsonObject response = Json.createObjectBuilder()
				.add("bitString", bitString)
				.build();
		return Response.ok(response.toString()).build();
	}

	/*
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String encrypt_plain(@PathParam( "photons" ) String photons, @PathParam( "base" ) String base)
	{
		String response = BB84Service.getBitStringFromPhotons(photons, base);
		return response;
	}
	
	@GET
	@Produces(MediaType.TEXT_HTML)
	public String encrypt_plain(@PathParam( "photons" ) String photons, @PathParam( "base" ) String base)
	{
		String response = BB84Service.getBitStringFromPhotons(photons, base);
		return "<html><body>"+response+"</body></html>";
	}
	
	@GET
	@Produces(MediaType.TEXT_XML)
	public String encrypt_plain(@PathParam( "photons" ) String photons, @PathParam( "base" ) String base)
	{
		String response = BB84Service.getBitStringFromPhotons(photons, base);
		return "<xml><response>"+response+"</response></xml>";	
		}
	
	*/

}
