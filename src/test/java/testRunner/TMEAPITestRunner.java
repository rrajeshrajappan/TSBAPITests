package testRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = { "classpath:featurefile/TMEAPITests.feature" }, glue = {
		"classpath:stepDef"}, plugin = { "pretty","html:TestOutput" })
public class TMEAPITestRunner extends AbstractTestNGCucumberTests {
}
