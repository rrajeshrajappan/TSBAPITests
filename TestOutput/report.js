$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefile/TMEAPITests.feature");
formatter.feature({
  "line": 1,
  "name": "Validate the UsedCars feature through Trademe API",
  "description": "",
  "id": "validate-the-usedcars-feature-through-trademe-api",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Check there is at least one listing in the TradeMe UsedCars category",
  "description": "",
  "id": "validate-the-usedcars-feature-through-trademe-api;check-there-is-at-least-one-listing-in-the-trademe-usedcars-category",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": ": valid API Credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": ": I send the used car API request",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": ": I should get valid response code and body",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": ": validate TotalCount value should be greater than zero",
  "keyword": "And "
});
formatter.match({
  "location": "TMEAPITestStepDfn.valid_API_Credentials()"
});
formatter.result({
  "duration": 839845399,
  "status": "passed"
});
formatter.match({
  "location": "TMEAPITestStepDfn.i_send_the_used_car_API_request()"
});
formatter.result({
  "duration": 2161440400,
  "status": "passed"
});
formatter.match({
  "location": "TMEAPITestStepDfn.i_should_get_valid_response_code_and_body()"
});
formatter.result({
  "duration": 1028039800,
  "status": "passed"
});
formatter.match({
  "location": "TMEAPITestStepDfn.validate_TotalCount_value_should_be_greater_than_zero()"
});
formatter.result({
  "duration": 644881301,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Check that the make Kia exists.",
  "description": "",
  "id": "validate-the-usedcars-feature-through-trademe-api;check-that-the-make-kia-exists.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": ": valid API Credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": ": I send the used car API request",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": ": I should get valid response code and body",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": ": validate Make Kia exist",
  "keyword": "And "
});
formatter.match({
  "location": "TMEAPITestStepDfn.valid_API_Credentials()"
});
formatter.result({
  "duration": 247599,
  "status": "passed"
});
formatter.match({
  "location": "TMEAPITestStepDfn.i_send_the_used_car_API_request()"
});
formatter.result({
  "duration": 287447699,
  "status": "passed"
});
formatter.match({
  "location": "TMEAPITestStepDfn.i_should_get_valid_response_code_and_body()"
});
formatter.result({
  "duration": 2959570301,
  "status": "passed"
});
formatter.match({
  "location": "TMEAPITestStepDfn.validate_Make_Kia_exist()"
});
formatter.result({
  "duration": 348504200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Query any existing Used Car listing and confirm that the following details are shown for that car",
  "description": "",
  "id": "validate-the-usedcars-feature-through-trademe-api;query-any-existing-used-car-listing-and-confirm-that-the-following-details-are-shown-for-that-car",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": ": valid API Credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": ": I send the used car API request",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": ": I should get valid response code and body",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": ": validate the following details are shown on the response",
  "rows": [
    {
      "cells": [
        "Details"
      ],
      "line": 20
    },
    {
      "cells": [
        "Number plate"
      ],
      "line": 21
    },
    {
      "cells": [
        "Kilometres"
      ],
      "line": 22
    },
    {
      "cells": [
        "Body"
      ],
      "line": 23
    },
    {
      "cells": [
        "Seats"
      ],
      "line": 24
    },
    {
      "cells": [
        "Fuel type"
      ],
      "line": 25
    },
    {
      "cells": [
        "Engine"
      ],
      "line": 26
    },
    {
      "cells": [
        "Transmission"
      ],
      "line": 27
    },
    {
      "cells": [
        "History"
      ],
      "line": 28
    },
    {
      "cells": [
        "Registration expires"
      ],
      "line": 29
    },
    {
      "cells": [
        "WoF expires"
      ],
      "line": 30
    },
    {
      "cells": [
        "Model detail"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TMEAPITestStepDfn.valid_API_Credentials()"
});
formatter.result({
  "duration": 319599,
  "status": "passed"
});
formatter.match({
  "location": "TMEAPITestStepDfn.i_send_the_used_car_API_request()"
});
formatter.result({
  "duration": 275712800,
  "status": "passed"
});
formatter.match({
  "location": "TMEAPITestStepDfn.i_should_get_valid_response_code_and_body()"
});
formatter.result({
  "duration": 909643900,
  "status": "passed"
});
formatter.match({
  "location": "TMEAPITestStepDfn.validate_the_following_details_are_shown_on_the_response(DataTable)"
});
formatter.result({
  "duration": 497292600,
  "status": "passed"
});
});