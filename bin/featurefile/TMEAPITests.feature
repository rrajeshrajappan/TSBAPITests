Feature: UsedCars feature of the Trademe web page

  Scenario: Check there is at least one listing in the TradeMe UsedCars category
    Given : valid API Credentials
    When : I send the used car API request
    Then : I should get valid response code and body
    And : validate TotalCount value should be greater than zero

  Scenario: Check that the make Kia exists.
   Given : valid API Credentials
   When : I send the used car API request
   Then : I should get valid response code and body
   And : validate Make Kia exist 

  Scenario: Query any existing Used Car listing and confirm that the following details are shown for that car
   Given : valid API Credentials
   When : I send the used car API request
   Then : I should get valid response code and body
   And : validate the following details are shown on the response
    |Details|
    |Number plate|
		|Kilometres|
		|Body|
		|Seats|
		|Fuel type|
		|Engine|
		|Transmission|
		|History|
		|Registration expires|
		|WoF expires|
		|Model detail|
   