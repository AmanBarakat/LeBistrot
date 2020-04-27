package Bistrot.Menu.repositories;


import Bistrot.Menu.models.Plats;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface PlatsRepository extends MongoRepository<Plats, String> {
  Plats findBy_id(ObjectId _id);
}
