package ch.hslu.wipro.qc.adapter.rest;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
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

@Path("/post/settings")
public class SettingsPOSTAdapter { // implements CryptoInterface

	@Context
	private HttpServletRequest request;

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response encrypt(@FormParam("frequency") int frequency, @FormParam("error") float error, @FormParam("noise") float noise) {
		Map<String, Object> settings = new HashMap<String, Object>();
		settings.put("frequency", frequency);
		settings.put("error", error);
		settings.put("noise", noise);
		BB84Service.setSettings(settings);
		return Response.ok().build();
	}


	/*
	
	@Produces(MediaType.APPLICATION_JSON)
	public Response encrypt(@PathParam("n") int n) {
		final String bitString = BB84Service.getRandomBitString(n, 0.5f);
		JsonObject response = Json.createObjectBuilder()
				.add("bitString", bitString)
				.build();
		return Response.ok(response.toString()).build();
	}
	

	 * 
	 * @GET
	 * 
	 * @Produces(MediaType.TEXT_PLAIN) public String encrypt_plain(@PathParam( "str"
	 * ) String str) { String response = BB84Service.getRandomBitString(str); return
	 * response; }
	 * 
	 * @GET
	 * 
	 * @Produces(MediaType.TEXT_HTML) public String encrypt_html(@PathParam( "str" )
	 * String str) { String response = BB84Service.getRandomBitString(str); return
	 * "<html><body>"+response+"</body></html>"; }
	 * 
	 * @GET
	 * 
	 * @Produces(MediaType.TEXT_XML) public String encrypt_xml(@PathParam( "str" )
	 * String str) { String response = BB84Service.getRandomBitString(str); return
	 * "<xml><response>"+response+"</response></xml>"; }
	 * 
	 */

}
