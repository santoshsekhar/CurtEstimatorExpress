import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class index {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\s531503\\Downloads\\chromedriver_win32\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://curtestimator.herokuapp.com/");
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
		
		// View details of a selected estimate - PASS
		
		driver.findElement(By.xpath("/html/body/div/div/div/div/div[2]/div[2]/div[2]/a[2]")).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("/html/body/div/div/b/b/b/form/input")).click();
		Thread.sleep(3000);
		driver.findElement(By.xpath("/html/body/div/div/div/div/div[2]/div[3]/div[2]/a[2]")).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("/html/body/div/div/b/b/b/form/input")).click();
		Thread.sleep(3000);

		// Deleting a selected estimate - PASS
		driver.get("https://curtestimator.herokuapp.com/coating");
		Thread.sleep(3000);
		driver.findElement(By.xpath("/html/body/div/div/div/div/div[2]/div[2]/div[2]/a[1]")).click();
		Thread.sleep(4000);
		driver.findElement(By.xpath("/html/body/div/div/div/div/div/form[1]/input")).click();
		Thread.sleep(3000);
		
		driver.close();      


		   

		
		
	
	}

}
