package stepDef;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TMEAPITestStepDfn extends codeRepository.ReusableMethods{
	
	@Given("^: valid API Credentials$")
	public void valid_API_Credentials() throws Throwable {
		apiCredentials();
	}

	@When("^: I send the used car API request$")
	public void i_send_the_used_car_API_request() throws Throwable {
		requestSpec();
	}

	@Then("^: I should get valid response code and body$")
	public void i_should_get_valid_response_code_and_body() throws Throwable {
		getResponscode();
		getStatusLine();
		getResponseBody();
	}

	@And("^: validate TotalCount value should be greater than zero$")
	public void validate_TotalCount_value_should_be_greater_than_zero() throws Throwable {
		validateListingCount();
	}

	@And("^: validate Make Kia exist$")
	public void validate_Make_Kia_exist() throws Throwable {
		validateMake();
	}

	@And("^: validate the following details are shown on the response$")
	public void validate_the_following_details_are_shown_on_the_response(DataTable arg1) throws Throwable {
		validateResponseBodyValues();
	}
}
