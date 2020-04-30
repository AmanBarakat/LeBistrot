package Bistrot.Reservation.controllers;

import Bistrot.Reservation.models.Reservation;
import Bistrot.Reservation.repositories.ReservationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController

@CrossOrigin


public class ReservationController {
  @Autowired
  private ReservationRepository repository;
  
 @RequestMapping(value = "/reservation", method = RequestMethod.GET)
  public List<Reservation> getAllReservation() {
    return repository.findAll();
  }

  @RequestMapping(value = "/reservation/{id}", method = RequestMethod.GET)
  @ResponseBody
  public Reservation getReservationById(@PathVariable("id") Long id) {
    return repository.findById(id).get();
  }
  
  @RequestMapping(value = "/reservation/{id}", method = RequestMethod.PUT)
  @ResponseBody
  public void modifyReservationById(@PathVariable("id") Long id, @Valid @RequestBody Reservation Reservation) {
	  Reservation.setId(id);
    repository.save(Reservation);
  }
  
  @RequestMapping(value = "/reservation", method = RequestMethod.POST)
  @ResponseBody
  public Reservation createReservation(@Valid @RequestBody Reservation Reservation) {
    repository.save(Reservation);
    return Reservation;
  }
  
  @RequestMapping(value = "/reservation/{id}", method = RequestMethod.DELETE)
  @ResponseBody
  public void deleteReservation(@PathVariable Long id) {
    repository.delete(repository.findById(id).get());
  }
}