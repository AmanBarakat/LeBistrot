package LeBistrot.repositories;


import LeBistrot.models.Plats;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface PlatsRepository extends MongoRepository<Plats, String> {
  Plats findBy_id(ObjectId _id);
}
