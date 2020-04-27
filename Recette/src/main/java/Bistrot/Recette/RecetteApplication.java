package Bistrot.Recette;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class RecetteApplication {

	public static void main(String[] args) {
		SpringApplication.run(RecetteApplication.class, args);
	}

}
