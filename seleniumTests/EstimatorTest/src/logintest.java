import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class logintest {

	public static void main(String args[]) throws InterruptedException {
	
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\s531503\\Downloads\\chromedriver_win32\\chromedriver.exe");
	WebDriver driver = new ChromeDriver();
	driver.get("https://curtestimator.herokuapp.com/login");
	driver.manage().window().maximize();
	
	// Login without entering user name and password - FAIL
	driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form[1]/div/div/div[3]/button")).click();
	Thread.sleep(1000);

	// Login without entering password - FAIL
	driver.get("https://curtestimator.herokuapp.com/login");
	driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys("cgeadmin@mail.com");
	driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form[1]/div/div/div[3]/button")).click();
	Thread.sleep(2000);

	
	// Login with incorrect user name - FAIL
	driver.get("https://curtestimator.herokuapp.com/login");
	driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys("cgeabc@mail.com");
	driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys("admin123");
	driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form[1]/div/div/div[3]/button")).click();
	Thread.sleep(2000);

	
	// Login with incorrect password - FAIL
	driver.get("https://curtestimator.herokuapp.com/login");
	driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys("cgeadmin@mail.com");
	driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys("adminabc123");
	driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form[1]/div/div/div[3]/button")).click();
	Thread.sleep(2000);

	
	// Login with correct user name and password - PASS
	driver.get("https://curtestimator.herokuapp.com/login");
	driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys("cgeadmin@mail.com");
	driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys("admin123");
	driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form[1]/div/div/div[3]/button")).click();
	Thread.sleep(2000);

	// Logout functionality - PASS
	driver.findElement(By.xpath("//*[@id=\"bs-example-navbar-collapse-1\"]/ul[2]/li/a")).click();
	Thread.sleep(2000);
	driver.findElement(By.xpath("//*[@id=\"bs-example-navbar-collapse-1\"]/ul[2]/li/ul/li/a")).click();
	Thread.sleep(2000);


	// Retrieve forgotten password - PASS
	driver.get("https://curtestimator.herokuapp.com/login");
	driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form[2]/button")).click();
	Thread.sleep(2000);
	
	driver.close();

	

	
	
}
}