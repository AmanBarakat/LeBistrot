package Bistrot.Menu;

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

import Bistrot.Menu.Plats;
import Bistrot.Menu.PlatsRepository;

@RestController

@CrossOrigin


public class PlatsController {
  @Autowired
  PlatsRepository pltrep;
  @RequestMapping(value = "/menu", method = RequestMethod.GET)
  @ResponseBody
  public List<Plats> getAllPlats() {

    return pltrep.findAll();
  }
  public PlatsController(){

  }
  @RequestMapping(value = "/menu/{id}", method = RequestMethod.GET)
  @ResponseBody
  public Plats getPlatById(@PathVariable("id") Long id) {
    return pltrep.findById(id).get();
  }
  
  @RequestMapping(value = "/menu/{id}", method = RequestMethod.PUT)
  @ResponseBody
  public void modifyPlatById(@PathVariable("id") Long id, @Valid @RequestBody Plats Plats) {
    Plats.setId(id);
    pltrep.save(Plats);
  }
  
  @RequestMapping(value = "/menu", method = RequestMethod.POST)
  @ResponseBody
  public Plats createPlat(@Valid @RequestBody Plats Plats) {
	  pltrep.save(Plats);
    return Plats;
  }
  
  @RequestMapping(value = "/menu/{id}", method = RequestMethod.DELETE)
  @ResponseBody
  public void deletePlat(@PathVariable Long id) {
	  pltrep.delete(pltrep.findById(id).get());
  }
}