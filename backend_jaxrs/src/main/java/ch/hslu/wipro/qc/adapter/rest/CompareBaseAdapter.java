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

@Path( "/comparebase/{base1}/{base2}" )
public class CompareBaseAdapter { // implements CryptoInterface

	@Context
	private HttpServletRequest request;
	
	@GET
	@Produces( MediaType.APPLICATION_JSON )
	public Response encrypt_plain(@PathParam( "base1" ) String base1, @PathParam( "base2" ) String base2)
	{
		final String compareString = BB84Service.compareBase(base1, base2);
		JsonObject response = Json.createObjectBuilder()
				.add("compareString", compareString)
				.build();
		return Response.ok(response.toString()).build();
	}

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
	
}
