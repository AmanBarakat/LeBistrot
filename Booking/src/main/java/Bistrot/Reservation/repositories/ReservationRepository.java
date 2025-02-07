package Bistrot.Reservation.repositories;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import Bistrot.Reservation.models.Reservation;


public interface ReservationRepository extends JpaRepository<Reservation, Long> {
	Optional<Reservation> findById(Long id);
}
