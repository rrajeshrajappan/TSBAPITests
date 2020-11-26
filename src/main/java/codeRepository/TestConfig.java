package codeRepository;

import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class TestConfig {
	
	RequestSpecification req;
	Response res;
		
	static String baseUrl = "https://api.tmsandbox.co.nz/v1/Search/Motors/Used.json";
	static String ckey = "377721F848E3F202C50210BEAF9544A8";
	static String csecret = "85A14AE96BA59CBA661F85F426B46102";
}
