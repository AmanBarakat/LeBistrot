package Bistrot.Reservation.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "reservation")
public class Reservation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true)

  public long id;
  @Column
  public String name;
  @Column
  public String dateres;
  @Column
  public String personnes;
  @Column
  public String typeres;
  @Column
  public String timeres;
  
  // Constructors
  public Reservation() {}
  
  public Reservation(String name, String dateres, String personnes, String timeres, String typeres) {
    this.name = name;
    this.dateres = dateres;
    this.timeres = timeres;
    this.personnes = personnes;
    this.typeres = typeres;
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
  
  public String getDateres() { return dateres; }
  public void setDateres(String dateres) { this.dateres= dateres; }
  
  public String getPersonnes() { return personnes; }
  public void setPersonnes(String personnes) { this.personnes = personnes; }

  public String getTimeres() { return timeres; }
  public void setTimeres(String timeres) { this.timeres= timeres; }
  
  public String gettyperes() { return typeres; }
  public void settyperes(String typeres) { this.typeres= typeres; }
  
}