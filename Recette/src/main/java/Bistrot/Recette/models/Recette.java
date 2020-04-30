package Bistrot.Recette.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "recette")
public class Recette {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true)
  public long id;
  @Column
  public String name;
  @Column
  public String temps;
  @Column
  public String personnes;
  @Column
  public String image;
  @Column
  public String instructions;
  @Column
  public String ingredients;
  
  // Constructors
  public Recette() {}
  
  public Recette(String name, String temps, String personnes, String image, String ingredients, String instructions) {

    this.name = name;
    this.temps = temps;
    this.image = image;
    this.personnes = personnes;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
  
  // long needs to be converted to string
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
      public long getId() {
      return id;
  }
  public void setId(long id) {
      this.id = id;
  }
  public String getName() { return name; }
  public void setName(String name) { this.name = name; }
  
  public String getTemps() { return temps; }
  public void setTemps(String temps) { this.temps = temps; }
  
  public String getPersonnes() { return personnes; }
  public void setPersonnes(String personnes) { this.personnes = personnes; }

  public String getInstructions() { return instructions; }
  public void setInstructions(String instructions) { this.instructions= instructions; }
  
  public String getIngredients() { return ingredients; }
  public void setIngredients(String ingredients) { this.ingredients = ingredients; }
  
  public String getImage() { return image; }
  public void setImage(String image) { this.image= image; }
}