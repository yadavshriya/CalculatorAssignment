package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		 glue = {"StepDef"}, 
         features = "Feature", 
         format = {"pretty","html:target/cucumber"}, 
         strict = true, 
         dryRun = false
         )

public class Runner {

}
