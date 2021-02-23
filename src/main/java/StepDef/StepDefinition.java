package StepDef;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {

	public WebDriver driver;

	//Initializes Webdriver and navigates to https://www.calculator.net/
	@Given("^user is in login page$")
	public void user_is_in_login_page() {
		String path = System.getProperty("user.dir"); // return project folder path
		String driverpath = path + "\\Dependency\\chromedriver.exe"; // return driver folder path
		System.setProperty("webdriver.chrome.driver", driverpath);
		driver = new ChromeDriver();
		driver.get("https://www.calculator.net/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

	}

	@When("^user enters first input value \"([^\"]*)\"$")
	public void user_enters_first_input_value(String arg1) {
      performOperation(arg1);
	}

	@When("^user click on operation \"([^\"]*)\"$")
	public void user_click_on_operation(String arg1) {
     performOperation(arg1);
	}

	@When("^user enters second input value \"([^\"]*)\"$")
	public void user_enters_second_input_value(String arg1) {
     performOperation(arg1);
	}

	@Then("^the result should be \"([^\"]*)\"$")
	public void the_result_should_be(StringBuilder arg1) {
		StringBuilder ExpectedResult = arg1;
		String ActualResult = driver.findElement(By.id("sciOutPut")).getText();
		Assert.assertTrue(ActualResult.contains(ExpectedResult));
		driver.quit();
	}
	
//The below method will perform all the Click action for given input string
	public void performOperation(String input) {
		  String value = input;
		  for(int i=0; i<value.length() ;i++) {
		  char val=value.charAt(i);
		  switch(val) {
		  
		  case '0': driver.findElement(By.xpath("//span[@onclick=\"r(0)\"]")).click();break;
		  case '1': driver.findElement(By.xpath("//span[@onclick=\"r(1)\"]")).click();break; 
		  case '2': driver.findElement(By.xpath("//span[@onclick=\"r(2)\"]")).click(); break;
		  case '3': driver.findElement(By.xpath("//span[@onclick=\"r(3)\"]")).click();break; 
		  case '4': driver.findElement(By.xpath("//span[@onclick=\"r(4)\"]")).click(); break;
		  case '5': driver.findElement(By.xpath("//span[@onclick=\"r(5)\"]")).click();break;
		  case '6': driver.findElement(By.xpath("//span[@onclick=\"r(6)\"]")).click();break;
		  case '7': driver.findElement(By.xpath("//span[@onclick=\"r(7)\"]")).click(); break;
		  case '8': driver.findElement(By.xpath("//span[@onclick=\"r(8)\"]")).click();break;
		  case '9': driver.findElement(By.xpath("//span[@onclick=\"r(9)\"]")).click(); break;
		  case '+': driver.findElement(By.xpath("//span[@onclick=\"r('+')\"]")).click(); break;
		  case '-': driver.findElement(By.xpath("//span[@onclick=\"r('-')\"]")).click(); break;
		  case '*': driver.findElement(By.xpath("//span[@onclick=\"r('*')\"]")).click(); break;
		  case '/': driver.findElement(By.xpath("//span[@onclick=\"r('/')\"]")).click(); break;
		  case '=': driver.findElement(By.xpath("//span[@onclick=\"r('=')\"]")).click(); break; 
		  
		  }
		  
	}
		 

	}

	

}
