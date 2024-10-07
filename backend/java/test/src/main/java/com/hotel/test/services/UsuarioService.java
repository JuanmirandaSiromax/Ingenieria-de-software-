package com.hotel.test.services;

import java.util.List;
import java.util.Objects;

import jakarta.transaction.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hotel.test.entities.Usuario;
import com.hotel.test.repository.UsuarioRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class UsuarioService {

    private final UsuarioRepository repository;
    private final PasswordEncoder passwordEncoder;

    public List<Usuario> getAllUser() {
        return repository.findAll();
    }

    public Usuario getUserById(Integer id) {
        return repository.getReferenceById(id);
    };

    public void save(Usuario usuario) {
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
        repository.save(usuario);
    }

    public boolean existsByEmail(String email) {
        return repository.existsByEmail(email);
    }

    public void encryptExistingPasswords() {
        List<Usuario> usuarios = repository.findAll();
        usuarios.forEach(usuario -> {
            usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
            repository.save(usuario);
        });
    }

    public void deleteUserById(Integer id) {
        repository.deleteByIdUsuario(id);
    }
}
