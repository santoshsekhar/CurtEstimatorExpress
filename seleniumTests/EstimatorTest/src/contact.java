import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class contact {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		// To include the web driver for chrome browser
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\s531503\\Downloads\\chromedriver_win32\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		
		// opens the website 
		driver.get("https://curtestimator.herokuapp.com/");
		//to maximize the window on opening
		driver.manage().window().maximize();

		// Contact page - PASS
		driver.get("https://curtestimator.herokuapp.com/contact");
		// waits 2000 milli seconds for next action
		Thread.sleep(2000);
		
		// Sending email without any sender information- FAIL
		driver.findElement(By.xpath("/html/body/div/div/div[1]/div[2]/form/div/button")).click();
		Thread.sleep(2000);
		
		//Sending email without entering senders name - FAIL
		driver.get("https://curtestimator.herokuapp.com/contact");
		driver.findElement(By.xpath("//*[@id=\"exampleFormControlInput1\"]")).sendKeys("santosh@gmail.com");
		driver.findElement(By.xpath("/html/body/div/div/div[1]/div[2]/form/div/button")).click();
		Thread.sleep(3000);
		
		// Sending email with improper email id. - FAIL
		driver.get("https://curtestimator.herokuapp.com/contact");
		driver.findElement(By.xpath("//*[@id=\"fullname\"]")).sendKeys("santosh");
		driver.findElement(By.xpath("//*[@id=\"formGroupExampleInput2\"]")).sendKeys("sekhar");
		driver.findElement(By.xpath("//*[@id=\"exampleFormControlInput1\"]")).sendKeys("santosh1234.com");
		driver.findElement(By.xpath("/html/body/div/div/div[1]/div[2]/form/div/button")).click();
		Thread.sleep(3000);
		
		// Sending email with all proper details - PASS
		driver.get("https://curtestimator.herokuapp.com/contact");
		driver.findElement(By.xpath("//*[@id=\"fullname\"]")).sendKeys("santosh");
		driver.findElement(By.xpath("//*[@id=\"formGroupExampleInput2\"]")).sendKeys("sekhar");
		driver.findElement(By.xpath("//*[@id=\"exampleFormControlInput1\"]")).sendKeys("santosh@gmail.com");
		driver.findElement(By.xpath("//*[@id=\"exampleFormControlTextarea1\"]")).sendKeys("Hello curt i would like to a flooring");
		driver.findElement(By.xpath("/html/body/div/div/div[1]/div[2]/form/div/button")).click();
		Thread.sleep(3000);
		
		// closes the web driver
		driver.close();

		
		

		
		
	}

}
