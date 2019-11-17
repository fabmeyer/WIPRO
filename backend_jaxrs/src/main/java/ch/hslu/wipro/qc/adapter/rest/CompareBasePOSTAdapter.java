package ch.hslu.wipro.qc.adapter.rest;


import javax.json.Json;
import javax.json.JsonObject;
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


@Path( "/post/comparebase/" )
public class CompareBasePOSTAdapter{ // implements CryptoInterface

	@Context
	private HttpServletRequest request;
	
	@POST
	@Produces( MediaType.APPLICATION_JSON )
	public Response encrypt_plain(@FormParam( "base1" ) String base1, @FormParam( "base2" ) String base2)
	{
		final String compareString = BB84Service.compareBase(base1, base2);
		JsonObject response = Json.createObjectBuilder()
				.add("compareString", compareString)
				.build();
		return Response.ok(response.toString()).build();
	}	
}
