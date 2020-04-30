drop table IF EXISTS reservation;
create TABLE reservation(
  id         Long         NOT NULL AUTO_INCREMENT,
  dateres    varchar(100) NOT NULL,
  name       varchar(40) NOT NULL,
  typeres varchar(20) NOT NULL,
  timeres  varchar(30) NOT NULL,
  personnes  varchar(20) NOT NULL,
  PRIMARY KEY (id)
);