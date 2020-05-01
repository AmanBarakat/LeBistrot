package Bistrot.Reservation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.ConfigurableApplicationContext;

import com.spotify.docker.client.shaded.javax.annotation.PostConstruct;

import Bistrot.Reservation.models.Reservation;
import Bistrot.Reservation.repositories.ReservationRepository;

@EnableEurekaClient
@SpringBootApplication
public class ReservationApplication {
	@Autowired
	ReservationRepository repository;
	public static void main(String[] args) {
			ConfigurableApplicationContext context = SpringApplication.run(ReservationApplication.class, args);
	}
    @PostConstruct
	public void init() {
		repository.save(new Reservation("Aline S.","28/05/2020","2","outdoor","8:30:00 PM"));
		repository.save(new Reservation("François P.","25/05/2020","3","indoor","6:30:00 PM"));
		repository.save(new Reservation("Aman B.","01/06/2020","4","outdoor","6:00:00 PM"));
		repository.save(new Reservation("Emma B.","17/05/2020","2","indoor","5:30:00 PM"));
	
	}
}