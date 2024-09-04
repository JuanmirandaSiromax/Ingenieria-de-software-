package com.hotel.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hotel.test.entities.Reserva;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Integer> {
    
}
