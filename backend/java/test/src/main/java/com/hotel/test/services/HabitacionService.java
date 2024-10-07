package com.hotel.test.services;

import java.util.List;

import com.hotel.test.enums.Enums;
import org.springframework.stereotype.Service;

import com.hotel.test.entities.Habitacion;
import com.hotel.test.repository.HabitacionRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class HabitacionService {
    
    private final HabitacionRepository repository;

    public List<Habitacion> getAllRoom() {
        return repository.findAll();
    }

    public Habitacion getByNumeroHabitacion(Integer numeroHabitacion) {
        return repository.getReferenceById(numeroHabitacion);
    }

    public List<Habitacion> verDisponibles() {
        return repository.findAllByEstado(Enums.EstadoHabitacion.disponible);
    }

    public List<Habitacion> verHabitacionesReservadasPorUsuario(List<Integer> numeroHabitaciones) {
        return repository.findAllByNumeroHabitacionIn(numeroHabitaciones);
    }

    public Habitacion actualizarEstadoHabitacion(Integer numeroHabitacion, Enums.EstadoHabitacion nuevoEstado) {
        Habitacion habitacion = repository.findById(numeroHabitacion)
                .orElseThrow(() -> new RuntimeException("Habitación no encontrada"));
        habitacion.setEstado(nuevoEstado);
        return repository.save(habitacion);
    }
}
