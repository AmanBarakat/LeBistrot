package Bistrot.Recette.controllers;

import Bistrot.Recette.models.Recette;
import Bistrot.Recette.repositories.RecetteRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController

@CrossOrigin

@ResponseBody
public class RecetteController {
  @Autowired
  private RecetteRepository repository;
  
	
	@GetMapping("/recette")
	public List<Recette> getAllRecette() {
	 return repository.findAll();
	}

	@PostMapping("/recette")
	public Recette createRecette(@Valid @RequestBody Recette Recette) {
	    return repository.save(Recette);
	}


	  @RequestMapping(value = "/recette/{id}", method = RequestMethod.GET)
	  @ResponseBody
	  public Recette getRecetteById(@PathVariable("id") Long id) {
	    return repository.findById(id).get();
	  }
	  
  @RequestMapping(value = "/recette/{id}", method = RequestMethod.PUT)
  @ResponseBody
  public void modifyRecetteById(@PathVariable("id") Long id, @Valid @RequestBody Recette Recette) {
    Recette.setId(id);
    repository.save(Recette);
  }
  

  
  @RequestMapping(value = "/recette/{id}", method = RequestMethod.DELETE)
  @ResponseBody
  public void deleteRecette(@PathVariable Long id) {
    repository.delete(repository.findById(id).get());
  }
}