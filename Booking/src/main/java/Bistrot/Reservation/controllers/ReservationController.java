package Bistrot.Reservation.controllers;

import Bistrot.Reservation.models.Reservation;
import Bistrot.Reservation.repositories.ReservationRepository;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController

@CrossOrigin(origins = "http://localhost:3000")


@RequestMapping("/")
public class ReservationController {
  @Autowired
  private ReservationRepository repository;
  
 @RequestMapping(value = "/", method = RequestMethod.GET)
  public List<Reservation> getAllReservation() {
    return repository.findAll();
  }

  @RequestMapping(value = "/{id}", method = RequestMethod.GET)
  public Reservation getReservationById(@PathVariable("id") ObjectId id) {
    return repository.findBy_id(id);
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public void modifyReservationById(@PathVariable("id") ObjectId id, @Valid @RequestBody Reservation Reservation) {
	  Reservation.set_id(id);
    repository.save(Reservation);
  }
  
  @RequestMapping(value = "/", method = RequestMethod.POST)
  public Reservation createReservation(@Valid @RequestBody Reservation Reservation) {
	  Reservation.set_id(ObjectId.get());
    repository.save(Reservation);
    return Reservation;
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  public void deleteReservation(@PathVariable ObjectId id) {
    repository.delete(repository.findBy_id(id));
  }
}