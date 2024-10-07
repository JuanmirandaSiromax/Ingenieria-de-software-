package com.hotel.test.repository;

import com.hotel.test.enums.Enums;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hotel.test.entities.Habitacion;

import java.util.List;

@Repository
public interface HabitacionRepository extends JpaRepository<Habitacion, Integer> {

    List<Habitacion> findAllByEstado(Enums.EstadoHabitacion estado);
    List<Habitacion> findAllByNumeroHabitacionIn(List<Integer> numeroHabitaciones);
}
