package Bistrot.Recette.models;


import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class Recette {
  @Id
  public ObjectId _id;
  
  public String name;
  public String temps;
  public String personnes;
  public String image;
  public String instructions;
  public String[] ingredients;
  
  // Constructors
  public Recette() {}
  
  public Recette(ObjectId _id, String name, String temps, String personnes, String image, String[] ingredients, String instructions) {
    this._id = _id;
    this.name = name;
    this.temps = temps;
    this.image = image;
    this.personnes = personnes;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
  
  // ObjectId needs to be converted to string
  public String get_id() { return _id.toHexString(); }
  public void set_id(ObjectId _id) { this._id = _id; }
  
  public String getName() { return name; }
  public void setName(String name) { this.name = name; }
  
  public String getTemps() { return temps; }
  public void setTemps(String temps) { this.temps = temps; }
  
  public String getPersonnes() { return personnes; }
  public void setPersonnes(String personnes) { this.personnes = personnes; }

  public String getInstructions() { return instructions; }
  public void setInstructions(String instructions) { this.instructions= instructions; }
  
  public String[] getIngredients() { return ingredients; }
  public void setIngredients(String[] ingredients) { this.ingredients = ingredients; }
  
  public String getImage() { return image; }
  public void setBreed(String image) { this.image= image; }
}