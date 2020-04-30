package Bistrot.Menu.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import Bistrot.Menu.models.Plats;
import Bistrot.Menu.repositories.PlatsRepository;

@RestController

@CrossOrigin


public class PlatsController {
  @Autowired
  private PlatsRepository repository;
  
  @RequestMapping(value = "/menu", method = RequestMethod.GET)
  @ResponseBody
  public List<Plats> getAllPlats() {
    return repository.findAll();
  }

  @RequestMapping(value = "/menu/{id}", method = RequestMethod.GET)
  @ResponseBody
  public Plats getPlatById(@PathVariable("id") Long id) {
    return repository.findById(id).get();
  }
  
  @RequestMapping(value = "/menu/{id}", method = RequestMethod.PUT)
  @ResponseBody
  public void modifyPlatById(@PathVariable("id") Long id, @Valid @RequestBody Plats Plats) {
    Plats.setId(id);
    repository.save(Plats);
  }
  
  @RequestMapping(value = "/menu", method = RequestMethod.POST)
  @ResponseBody
  public Plats createPlat(@Valid @RequestBody Plats Plats) {
    repository.save(Plats);
    return Plats;
  }
  
  @RequestMapping(value = "/menu/{id}", method = RequestMethod.DELETE)
  @ResponseBody
  public void deletePlat(@PathVariable Long id) {
    repository.delete(repository.findById(id).get());
  }
}