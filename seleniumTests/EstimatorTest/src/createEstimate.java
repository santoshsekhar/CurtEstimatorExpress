import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class createEstimate {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		
		// To include the web driver for chrome browser
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\s531503\\Downloads\\chromedriver_win32\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://curtestimator.herokuapp.com/");
		//maximize the window on opening
		driver.manage().window().maximize();
		
		
		// Login with correct user name and password - PASS
		driver.get("https://curtestimator.herokuapp.com/login");
		driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys("cgeadmin@mail.com");
		driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys("admin123");
		Thread.sleep(2000);
		driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form[1]/div/div/div[3]/button")).click();
		Thread.sleep(2000);
		
		// View all existing estimates - PASS
		driver.get("https://curtestimator.herokuapp.com/coating");
		Thread.sleep(3000);
		
		// Create an estimate with default values - PASS
		driver.findElement(By.xpath("/html/body/div/div/div/div/div[2]/a")).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("//*[@id=\"materialList\"]/div[9]/input\r\n")).click();
		Thread.sleep(4000);
		
		
		
		// Create an estimate with by entering negative values- FAIL
		driver.findElement(By.xpath("/html/body/div/div/div/div/div[2]/a")).click();
		driver.findElement(By.xpath("//*[@id=\"name\"]")).sendKeys("Santosh");
		driver.findElement(By.xpath("//*[@id=\"location\"]")).sendKeys("Maryville");
		driver.findElement(By.xpath("//*[@id=\"squareFeet\"]")).sendKeys("1200");
		driver.findElement(By.xpath("//*[@id=\"product1\"]")).sendKeys("Wood");
		driver.findElement(By.xpath("//*[@id=\"unitcost1\"]")).sendKeys("10");
		driver.findElement(By.xpath("//*[@id=\"coverageSquareFeetPerUnit1\"]")).sendKeys("-4");
		driver.findElement(By.xpath("//*[@id=\"materialList\"]/div[9]/input\r\n")).click();
		Thread.sleep(4000);
		driver.findElement(By.xpath("//*[@id=\"materialList\"]/form/input")).click();
		Thread.sleep(4000);

		// Create an estimate with by entering alpha numeric values - FAIL
		driver.findElement(By.xpath("/html/body/div/div/div/div/div[2]/a")).click();
		driver.findElement(By.xpath("//*[@id=\"name\"]")).sendKeys("Santosh");
		driver.findElement(By.xpath("//*[@id=\"location\"]")).sendKeys("Maryville");
		driver.findElement(By.xpath("//*[@id=\"squareFeet\"]")).sendKeys("1200");
		driver.findElement(By.xpath("//*[@id=\"product1\"]")).sendKeys("Wood");
		driver.findElement(By.xpath("//*[@id=\"unitcost1\"]")).sendKeys("10");
		driver.findElement(By.xpath("//*[@id=\"coverageSquareFeetPerUnit1\"]")).sendKeys("4");
		driver.findElement(By.xpath("//*[@id=\"numberOfPeople\"]")).sendKeys("e");
		driver.findElement(By.xpath("//*[@id=\"materialList\"]/div[9]/input\r\n")).click();
		Thread.sleep(4000);
		driver.findElement(By.xpath("//*[@id=\"materialList\"]/form/input")).click();
		Thread.sleep(4000);

		// Logout functionality - PASS
		driver.findElement(By.xpath("//*[@id=\"bs-example-navbar-collapse-1\"]/ul[2]/li/a")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id=\"bs-example-navbar-collapse-1\"]/ul[2]/li/ul/li/a")).click();
		Thread.sleep(2000);
		
		//close the web driver
		driver.close();
		

	}

}
