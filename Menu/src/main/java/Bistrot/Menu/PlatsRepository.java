package Bistrot.Menu;


import Bistrot.Menu.Plats;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


public interface PlatsRepository extends JpaRepository<Plats, Long> {
  Optional<Plats> findById(Long id);
}
