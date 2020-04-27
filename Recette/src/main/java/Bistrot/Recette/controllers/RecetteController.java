package Bistrot.Recette.controllers;

import Bistrot.Recette.models.Recette;
import Bistrot.Recette.repositories.RecetteRepository;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.core.env.Environment;

import javax.validation.Valid;
import java.util.List;

@RestController

@CrossOrigin(origins = "http://localhost:3000")


@RequestMapping("/")
public class RecetteController {
  @Autowired
  private RecetteRepository repository;
  
  private Environment env;
  
  @RequestMapping(value = "/status/check", method = RequestMethod.GET)
  public String status() {
      return "Working on port " + env.getProperty("local.server.port");
  }
  @RequestMapping(value = "/", method = RequestMethod.GET)
  public List<Recette> getAllRecette() {
    return repository.findAll();
  }

  @RequestMapping(value = "/{id}", method = RequestMethod.GET)
  public Recette getRecetteById(@PathVariable("id") ObjectId id) {
    return repository.findBy_id(id);
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public void modifyRecetteById(@PathVariable("id") ObjectId id, @Valid @RequestBody Recette Recette) {
    Recette.set_id(id);
    repository.save(Recette);
  }
  
  @RequestMapping(value = "/", method = RequestMethod.POST)
  public Recette createRecette(@Valid @RequestBody Recette Recette) {
    Recette.set_id(ObjectId.get());
    repository.save(Recette);
    return Recette;
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  public void deleteRecette(@PathVariable ObjectId id) {
    repository.delete(repository.findBy_id(id));
  }
}