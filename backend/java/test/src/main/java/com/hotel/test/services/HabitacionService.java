package com.hotel.test.services;

import java.util.List;

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

    public Habitacion getUserById(Integer id) {
        return repository.getReferenceById(id);
    };
}
