package ch.hslu.wipro.qc.adapter.rest;

/**
 * This class determines the REST interface on the server. Each request starts with /post/ followed by the specific name. 
 * The parameters are sent as POST parameters, whereas their name must be identical to the @FormParam name
 * @author Adrian Althaus
 */


import java.util.HashMap;
import java.util.Map;

import javax.json.Json;
import javax.json.JsonObject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import ch.hslu.wipro.qc.service.BB84Service;

@Path("/post")
public class BB84Adapter {

	@Context
	private HttpServletRequest request; // needed if session is required 

	@POST
	@Path("/comparebase")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.APPLICATION_JSON)
	public Response compareBase(@FormParam("base1") String base1, @FormParam("base2") String base2) {
		final String compareString = BB84Service.compareBase(base1, base2);
		JsonObject response = Json.createObjectBuilder().add("compareString", compareString).build();
		return Response.ok(response.toString()).build();
	}

	@POST
	@Path("/emitphoton/") 
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.APPLICATION_JSON)
	public Response emitPhoton(@FormParam("base") String base, @FormParam("str") String str){
		final String photonString = BB84Service.emitPhoton(base, str);
		JsonObject response = Json.createObjectBuilder().add("photonString", photonString).build();
		return Response.ok(response.toString()).build();
	}

	@POST
	@Path("/receivephoton")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.APPLICATION_JSON)
	public Response receivePhoton(@FormParam("photons") String photons, @FormParam("base") String base, @FormParam("noise") int noise,
		@FormParam("eavesdropping") int eavesdropping, @FormParam("undetected") float undetected) {
		final String[] result = BB84Service.receivePhoton(photons, base, noise, eavesdropping);
		JsonObject response = Json.createObjectBuilder().add("bitString", result[0]).add("stateString", result[1]).build();
		return Response.ok(response.toString()).build();
	}
	
	@POST
	@Path("/randombase")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.APPLICATION_JSON)
	public Response randomBase(@FormParam("stringLength") int stringLength, @FormParam("prob") float prob) {
		final String baseString = BB84Service.getRandomBase(stringLength, prob);
		JsonObject response = Json.createObjectBuilder().add("baseString", baseString).build();
		return Response.ok(response.toString()).build();
	}
 
	@POST
	@Path("/randomstring")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.APPLICATION_JSON)
	public Response randomString(@FormParam("stringLength") int stringLength, @FormParam("prob") int prob) {
		final String bitString = BB84Service.getRandomBitString(stringLength, prob);
		JsonObject response = Json.createObjectBuilder().add("bitString", bitString).build();
		return Response.ok(response.toString()).build();
	} 
	
	@POST
	@Path("/shortenkey")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.APPLICATION_JSON)
 	public Response shortenKey(@FormParam("base1") String base1, @FormParam("base2") String base2, @FormParam("string_alice") String string_alice, @FormParam("string_bob") String string_bob, @FormParam("state_string") String state_string) {
		final String[] result = BB84Service.shortenKey(base1, base2, string_alice, string_bob, state_string); 
		JsonObject response = Json.createObjectBuilder().add("comparedBase", result[0])
		 .add("commonKeyAlice", result[1])
		 .add("commonKeyBob", result[2])
		 .add("stateString", result[3])
		 .build();
		return Response.ok(response.toString()).build();
}	
	
	@POST 
	@Path("/comparekey") 
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.APPLICATION_JSON)
	public Response compareKey(@FormParam("key1") String key1, @FormParam("key2") String key2, @FormParam("state_string") String state_string, @FormParam("percentage") int percentage ) {
		final String[] shortenedKey = BB84Service.compareKey(key1, key2, state_string, percentage); 
		JsonObject response = Json.createObjectBuilder()
		 .add("restKeyAlice", shortenedKey[0])
		 .add("restKeyBob", shortenedKey[1])
		 .add("match", shortenedKey[2])
		 .add("colorString", shortenedKey[3])
		 .build();
		return Response.ok(response.toString()).build();
}
	 
	@POST
	@Path("/settings")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.APPLICATION_JSON)
	public Response settings(@FormParam("frequency") int frequency, @FormParam("error") int error,
			@FormParam("noise") int noise, @FormParam("stringLength") int stringLength) {
		Map<String, Object> settings = new HashMap<String, Object>();
		settings.put("frequency", frequency);
		settings.put("error", error);
		settings.put("noise", noise);
		settings.put("stringLength", stringLength); 
		BB84Service.setSettings(settings, request);
		return Response.ok().build();
	}
}
