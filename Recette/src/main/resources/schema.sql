drop table IF EXISTS recette;
create TABLE recette (
  id         Long         NOT NULL AUTO_INCREMENT,
  name       varchar(200) NOT NULL,
  image  varchar(1000) NOT NULL,
  ingredients varchar(2000) NOT NULL,
  instructions  varchar(1000) NOT NULL,
  temps  varchar(20) NOT NULL,
  personnes  varchar(20) NOT NULL,
  PRIMARY KEY (id)
);