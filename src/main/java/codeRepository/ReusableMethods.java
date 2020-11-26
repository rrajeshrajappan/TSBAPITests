package codeRepository;

import static io.restassured.RestAssured.given;
import io.restassured.path.json.JsonPath;
import org.testng.Assert;
import org.testng.annotations.Test;

public class ReusableMethods extends TestConfig{
			
	@Test
	//API credentials 
	public void apiCredentials()
	{		
		req = given().auth().oauth(ckey, csecret, "", "");		
	}
		
	@Test
	//Get the baseurl
	public void requestSpec()
	{		
		apiCredentials();
		res = req.when().get(baseUrl);
		System.out.println("The baseUrl is: " + baseUrl + "\n");
	} 
 
	@Test
	//Get the Response status code
	public void getResponscode()
	{		
		requestSpec();
		int code = res.getStatusCode();
		System.out.println("The response code is: " + code + "\n");
		Assert.assertEquals(200, code);
	}
		
	@Test
	//Get the Response status line
	public void getStatusLine()
	{		
		requestSpec();
		String statusline = res.getStatusLine().toString();
		System.out.println("The response status is: " + statusline + "\n");
	}
		
	@Test
	//print the Response body
	public void getResponseBody()
	{		
		requestSpec();
		System.out.println("The API response content is: " + "\n\n" + res.getBody().jsonPath().prettify() + "\n");
	}
	
	@Test
	//Assert that atleast one listing is there 
	public void validateListingCount()
	{		
		getResponseBody();
		JsonPath json = res.jsonPath();
		String totcount = json.getString("TotalCount");
		int count = Integer.parseInt(totcount);
		if(count>0)
		{
			System.out.println("we got some listings, the listing count is: " + count);
		}
	}
	
	@Test
	//Validate the make Kia exists  
	public void validateMake()
	{		
		getResponseBody();
		JsonPath json = res.jsonPath();
		if(json.getString("List.Make") == "Kia")
		{
			System.out.println("we got make Kia listings");
		}
		else System.out.println("we dont have Kia listings");
	}
	
	@Test
	//Assert that required values in the response body 
	public void validateResponseBodyValues()
	{		
		getResponseBody();
		JsonPath json = res.jsonPath();
		String totcount = json.getString("TotalCount");
		int count = Integer.parseInt(totcount);
		if(count>0)
		{
			String [] validationFields = {"NumberPlate", "Odometer", "BodyStyle", "Seats", "Fuel", "EngineSize", "Transmission", "ImportHistory", "RegistrationExpires", "WofExpires", "Model"};
			int cnt= validationFields.length;
			for(int i=0;i<cnt;i++)
			{
			String validationField = json.getString("List." + validationFields[i]);
			if(validationField != null)
			{
				System.out.println("The " + validationFields[i] + " value is:" + validationField);
			}
			else System.out.println("expected value " + validationFields[i] + " is not in the response");
			}
		}	
	}
}