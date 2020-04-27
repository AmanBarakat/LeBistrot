package Bistrot.Recette.repositories;


import Bistrot.Recette.models.Recette;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface RecetteRepository extends MongoRepository<Recette, String> {
  Recette findBy_id(ObjectId _id);
}
