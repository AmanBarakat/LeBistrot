package Bistrot.Menu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.ConfigurableApplicationContext;

import com.spotify.docker.client.shaded.javax.annotation.PostConstruct;

import Bistrot.Menu.Plats;
import Bistrot.Menu.PlatsRepository;


@EnableEurekaClient
@SpringBootApplication

public class MenuApplication {
@Autowired
PlatsRepository pltrep;
	  
	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(MenuApplication.class, args);
	}
    @PostConstruct
public void init() {
        pltrep.save(new Plats("Coq au vin", "20.75", "https://i.pinimg.com/originals/d6/fa/82/d6fa82829e5edcbcc6f7a3a087bb6cdd.jpg"));
        pltrep.save(new Plats("Petit salé aux lentilles ", "18", "https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/le-petit-sale-aux-lentilles-2634663/45285195-5-fre-FR/Le-petit-sale-aux-lentilles.jpg"));
        pltrep.save(new Plats("Navarin d’agneau ","13","https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/navarin-d-agneau-2343800/32318662-1-fre-FR/Navarin-d-agneau.jpeg"));
        pltrep.save(new Plats("Pissaladière aux oignons","15.75","https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/pizza-pissaladiere-aux-oignons-2871512/51895860-3-fre-FR/Pizza-pissaladiere-aux-oignons.jpeg"));
        pltrep.save(new Plats("Aïoli","19.25","https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/aioli-2438695/37023859-5-fre-FR/Aioli.jpeg"));
        pltrep.save(new Plats("Croque-monsieur","8.75","https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/croque-monsieur-2280962/26592320-3-fre-FR/Croque-monsieur.jpeg"));
        pltrep.save(new Plats("Terrine de poulet au vin blanc et fines herbes","18.5","https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/terrine-de-poulet-au-vin-blanc-et-fines-herbes-3114446/65562017-1-fre-FR/Terrine-de-poulet-au-vin-blanc-et-fines-herbes.jpeg"));
        pltrep.save(new Plats("Maquereaux au vin blanc faciles","16.8","https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/maquereaux-au-vin-blanc-faciles-3015693/58465281-1-fre-FR/Maquereaux-au-vin-blanc-faciles.jpg"));
        pltrep.save(new Plats("Gigot aux herbes, sauce ail","17.89","https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/gigot-aux-herbes-sauce-a-l-ail-2692671/46815451-1-fre-FR/Gigot-aux-herbes-sauce-a-l-ail.jpg"));

}

}