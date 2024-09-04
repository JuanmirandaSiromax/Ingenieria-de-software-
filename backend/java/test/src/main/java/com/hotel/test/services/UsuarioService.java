package com.hotel.test.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hotel.test.entities.Usuario;
import com.hotel.test.repository.UsuarioRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsuarioService {
    
    private final UsuarioRepository repository;

    public List<Usuario> getAllUser() {
        return repository.findAll();
    }

    public Usuario getUserById(Integer id) {
        return repository.getReferenceById(id);
    };
}
