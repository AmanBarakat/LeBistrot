package Bistrot.Reservation.repositories;


import Bistrot.Reservation.models.Reservation;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface ReservationRepository extends MongoRepository<Reservation, String> {
	Reservation findBy_id(ObjectId _id);
}
