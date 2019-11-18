package ch.hslu.wipro.qc.adapter.rest;

import java.util.HashMap;
import java.util.Map;

import javax.inject.Inject;
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

import org.glassfish.jersey.media.multipart.FormDataParam;

import ch.hslu.wipro.qc.adapter.BB84Interface;
import ch.hslu.wipro.qc.service.BB84Service;

@Path("/post")
public class BB84Adapter implements BB84Interface {

	@Context
	private HttpServletRequest request;



	@POST
	@Path("/comparebase/")
	@Produces(MediaType.APPLICATION_JSON)
	public Response compareBase(@FormParam("base1") String base1, @FormParam("base2") String base2) {
		final String compareString = BB84Service.compareBase(base1, base2);
		JsonObject response = Json.createObjectBuilder().add("compareString", compareString).build();
		return Response.ok(response.toString()).build();
	}

	@POST
	@Path("/emitphoton/")
	@Produces(MediaType.APPLICATION_JSON)
	public Response emitPhoton(@FormParam("base") String base, @FormParam("str") String str,
			@FormParam("angle_variance") float angle_var, @FormParam("length_variance") float length_var) {
		final String photonString = BB84Service.getPhotonString(base, str, angle_var, length_var);
		JsonObject response = Json.createObjectBuilder().add("photonString", photonString).build();
		return Response.ok(response.toString()).build();
	}

	@POST
	@Path("/receivephoton/")
	@Produces(MediaType.APPLICATION_JSON)
	public Response receivePhoton(@FormParam("photons") String photons, @FormParam("base") String base,
			@FormParam("fp") float fp, @FormParam("undetected") float undetected) {
		final String bitString = BB84Service.getBitStringFromPhotons(photons, base, fp, undetected);
		JsonObject response = Json.createObjectBuilder().add("bitString", bitString).build();
		return Response.ok(response.toString()).build();
	}

	@POST
	@Path("/randombase/")
	@Produces(MediaType.APPLICATION_JSON)
	public Response randomBase(@FormParam("n") int n, @FormParam("prob") float prob) {
		final String baseString = BB84Service.getRandomBaseString(Integer.valueOf(n), prob);
		JsonObject response = Json.createObjectBuilder().add("baseString", baseString).build();
		return Response.ok(response.toString()).build();
	}

	@POST
	@Path("/randomstring")
	@Produces(MediaType.APPLICATION_JSON)
	public Response randomString(@FormParam("n") int n, @FormParam("prob") float prob) {
		final String bitString = BB84Service.getRandomBitString(n, prob);
		JsonObject response = Json.createObjectBuilder().add("bitString", bitString).build();
		return Response.ok(response.toString()).build();
	}

	@POST
	@Path("/settings")
	@Produces(MediaType.APPLICATION_JSON)
	public Response settings(@FormParam("frequency") int frequency, @FormParam("error") int error,
			@FormParam("noise") int noise) {
		Map<String, Object> settings = new HashMap<String, Object>();
		settings.put("frequency", frequency);
		settings.put("error", error);
		settings.put("noise", noise);
		BB84Service.setSettings(settings);
		return Response.ok().build();
	}
}