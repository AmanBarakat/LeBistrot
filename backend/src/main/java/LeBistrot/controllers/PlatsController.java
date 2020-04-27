package LeBistrot.controllers;

import LeBistrot.models.Plats;
import LeBistrot.repositories.PlatsRepository;

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
public class PlatsController {
  @Autowired
  private PlatsRepository repository;
  
  @RequestMapping(value = "/", method = RequestMethod.GET)
  public List<Plats> getAllPlats() {
    return repository.findAll();
  }

  @RequestMapping(value = "/{id}", method = RequestMethod.GET)
  public Plats getPetById(@PathVariable("id") ObjectId id) {
    return repository.findBy_id(id);
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public void modifyPetById(@PathVariable("id") ObjectId id, @Valid @RequestBody Plats Plats) {
    Plats.set_id(id);
    repository.save(Plats);
  }
  
  @RequestMapping(value = "/", method = RequestMethod.POST)
  public Plats createPet(@Valid @RequestBody Plats Plats) {
    Plats.set_id(ObjectId.get());
    repository.save(Plats);
    return Plats;
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  public void deletePet(@PathVariable ObjectId id) {
    repository.delete(repository.findBy_id(id));
  }
}