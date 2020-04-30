package Bistrot.Reservation.models;

import java.util.Date;

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
  public Date date;
  @Column
  public String personnes;
  @Column
  public String type;
  @Column
  public String time;
  
  // Constructors
  public Reservation() {}
  
  public Reservation(long id, String name, Date date, String personnes, String time, String type) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.time = time;
    this.personnes = personnes;
    this.type = type;
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
  
  public Date getDate() { return date; }
  public void setDate(Date date) { this.date= date; }
  
  public String getPersonnes() { return personnes; }
  public void setPersonnes(String personnes) { this.personnes = personnes; }

  public String getTime() { return time; }
  public void setTime(String time) { this.time= time; }
  
  public String getType() { return type; }
  public void setType(String type) { this.type= type; }
  
}