package com.hotel.test.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hotel.test.entities.Reserva;
import com.hotel.test.repository.ReservaRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReservaService {
    
    private final ReservaRepository repository;

    public List<Reserva> getAllUser() {
        return repository.findAll();
    }

    public Reserva getUserById(Integer id) {
        return repository.getReferenceById(id);
    };
}
