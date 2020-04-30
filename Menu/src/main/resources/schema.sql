drop table IF EXISTS plats;
create TABLE plats (
  id         Long         NOT NULL AUTO_INCREMENT,
  name       varchar(200) NOT NULL,
  image  varchar(1000) NOT NULL,
  price  varchar(20) NOT NULL,
  PRIMARY KEY (id)
);