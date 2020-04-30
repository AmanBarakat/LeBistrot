package Bistrot.Recette.repositories;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Bistrot.Recette.models.Recette;

@Repository
public interface RecetteRepository extends JpaRepository<Recette, Long> {

}
