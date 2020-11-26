Overview:

- This TSBApiTests project covers the few of the trademe API call features.

- Java/RestAssured/TestNg/Cucumber BDD is used here to build this test framework

- Given user stories and acceptance criteria mapped in apiTestFeatures.feature file

- Created the following test scenarios to cover the given user stories
  1. validate the valid word search responses [Status code - 200 and its content]
  2. validate the in valid word search responses [Status code - 404 and its content]
  3. validate random word search responses [send valid, invalid words randomly and verify the responses]

- step definitions and validations for the features are mapped to TestDriver.java

- Reusable components or functional library are created for the requirements in ApiReusableComponents.java

- Test Configurations are maintained in TestConfig.java

- TestRunner.java triggers the execution and generate .html test reports 

Build projects instructions:

- Install Eclipse/intelliJ or some java IDE

- Import this Gradle project from Github --> https://github.com/rrajeshrajappan/WpactApiTests/tree/master/WpacApiTests

- build.gradle

- Run the tests from testng.xml (RunAs -> TestNg Suite)

Framework flow:

TestRunner.java <--> apiTestFeatures.feature and TestDriver.java <--> ApiReusableComponents.java, TestConfig.java

  