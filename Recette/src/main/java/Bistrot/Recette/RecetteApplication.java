package Bistrot.Recette;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import com.spotify.docker.client.shaded.javax.annotation.PostConstruct;

import Bistrot.Recette.RecetteApplication;
import Bistrot.Recette.models.Recette;
import Bistrot.Recette.repositories.RecetteRepository;

@EnableJpaAuditing
@EnableEurekaClient
@SpringBootApplication
public class RecetteApplication {
	@Autowired
	RecetteRepository repository;
	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(RecetteApplication.class, args);

	}
    @PostConstruct
	public void init() {
    	repository.save(new Recette("Champignons de Paris à la tomate et au tofu","Égoutter et rincer les champignons de Paris puis, les mettre dans une poêle anti-adhésive, dans laquelle on aura fait chauffer environ 3 cuillères à soupes de vinaigre balsamique.Laisser cuire environ 3 min à feu vif puis, ajouter le tofu coupé en cube et le coulis de tomate.Saler à votre convenance. Couvrir, laisser cuire environs 5 min.","1 boîte de champignon de Paris (environs 250 g);75 g de tofu;Coulis de tomate;Vinaigre balsamique;Sel","15 min","1","https://img-3.journaldesfemmes.fr/vqTMPncQ3mYUyEfMlApXlKpSZjY=/750x/smart/8fde24fbf6074d76a4a151fa78d6a8d5/recipe-jdf/383606.jpg"));
		repository.save(new Recette("Daurade","Découper la carotte en tranches fines, le fenouil en lanière minces. Hacher les oignons et ails. Déposer le poisson dans un plat allant au four, parsemer avec les légumes, oignon et ail, les herbes de Provence (environ 1 cuillère à café, plus ou moins selon le goût).     Saler, poivrer, verser le jus du 1/2 citron, ajouter un bon filet de huile olive.     Mettre au four une trentaine de minutes à 180°C (thermostat 6) en surveillant la cuisson. Réduire si les légumes brunissent trop.     Servir avec du riz blanc.","1 dorade;1/2 fenouil;1 carotte;1 gousse ail;1/4 oignon","35 min","2","https://img.cuisineaz.com/400x320/2013-12-20/i97355-daurade-au-four.jpg"));
		repository.save(new Recette("Tian de légumes du soleil","Préchauffez le four à 210 °C (th. 7). Lavez et séchez les légumes et le thym. Coupez les légumes en rondelles d’environ 1/2 cm d’épaisseur. Déposez-les dans un plat à gratin en alternant les tranches d’aubergine, de courgette, de tomate, et en réalisant une forme circulaire. Ajoutez les gousses d’ail émincées. Arrosez d’huile d’olive. Parsemez de thym, de sel et de poivre. Enfournez le tian pour 30 mn, puis baissez le four à 180 °C (t h. 6) et laissez cuire encore 15 mn. Sortez du four et servez.","1 aubergine de 250 g environ;2 courgettes;4 tomates rondes;2 brins de thym frais;2 gousses ail;10 cl huile olive","45 min","4","https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/tian-de-legumes-du-soleil-3145546/68708779-2-fre-FR/Tian-de-legumes-du-soleil.jpg"));

	}

}
