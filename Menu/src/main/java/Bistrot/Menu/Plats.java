package Bistrot.Menu;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "plats")
public class Plats {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true)

  public long id;
  @Column
  public String name;
  @Column
  public String price;
  @Column
  public String image;
  
  // Constructors
  public Plats() {}
  
  public Plats( String name, String price, String image) {
  
    this.name = name;
    this.price = price;
    this.image = image;
  }
  
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
  
  public String getPrice() { return price; }
  public void setPrice(String price) { this.price = price; }
  
  public String getImage() { return image; }
  public void setImage(String image) { this.image= image; }
}