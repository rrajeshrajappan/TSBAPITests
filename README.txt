Overview:

- This TSBApiTests project covers the few of the trademe API call features.
- Java/RestAssured/TestNg/Cucumber BDD is used here to build this test framework

Framework flow:
src/main/java/codeRepository
 - ReusableMethods.java (contains all the API core operations, validation methods)
 - TestConfig.java (contains API test configurations)

src/test/java/
 - TMEAPITestStepDfn.java (test validation class created aginst the requirements in the feature file)
 - TMEAPITestRunner.java (test runner class)
 - testng.xml (helps to execute the tests)

src/test/resources/featurefile/
 - TMEAPITests.feature (feature file contains the requirements)

TSBApiTests/test-output/Suite/
 - TMEUsedMotorsSearchTests.html (contains the test results)

How to Build this project?

- Install Eclipse/intelliJ or some java IDE
- Import this Gradle project from Github --> https://github.com/rrajeshrajappan/TSBAPITests.git 
- Setup the workspace in your IDE
- build the gradle project using build.gradle
- Run the tests from testng.xml (RunAs -> TestNg Suite)
- .html test reports generates under TSBApiTests/test-output/Suite/ -> TMEUsedMotorsSearchTests.html
