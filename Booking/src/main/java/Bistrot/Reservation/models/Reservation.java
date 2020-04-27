package Bistrot.Reservation.models;


import java.util.Date;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class Reservation {
  @Id
  public ObjectId _id;
  
  public String name;
  public Date date;
  public String personnes;
  public String type;
  public String time;
  
  // Constructors
  public Reservation() {}
  
  public Reservation(ObjectId _id, String name, Date date, String personnes, String time, String type) {
    this._id = _id;
    this.name = name;
    this.date = date;
    this.time = time;
    this.personnes = personnes;
    this.type = type;
  }
  
  // ObjectId needs to be converted to string
  public String get_id() { return _id.toHexString(); }
  public void set_id(ObjectId _id) { this._id = _id; }
  
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