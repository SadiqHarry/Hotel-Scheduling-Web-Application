package edu.wgu.d387_sample_code;

import edu.wgu.d387_sample_code.update.Timezone;
import edu.wgu.d387_sample_code.update.WelcomeMessage;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Locale;

@SpringBootApplication
public class D387SampleCodeApplication {

	public static void main(String[] args) {
		SpringApplication.run(D387SampleCodeApplication.class, args);

		// Create instances of the WelcomeMessage class for English and French
		WelcomeMessage welcomeMessageEn = new WelcomeMessage(Locale.US);
		WelcomeMessage welcomeMessageFr = new WelcomeMessage(Locale.CANADA_FRENCH);

		//create threads
		Thread english = new Thread(welcomeMessageEn);
		Thread french = new Thread(welcomeMessageFr);

		// Start threads
		english.start();
		french.start();

		Timezone.printTimeConversion();

	}


}
