package com.hotel.test.services;

import java.util.List;
import java.util.Objects;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hotel.test.entities.Usuario;
import com.hotel.test.repository.UsuarioRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
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

    public Usuario validarUsuario(String email, String password) {
        Usuario usuario = repository.findByEmail(email);
        log.info("user pass {}, string pass {}", password, usuario.getPassword());
        if (Objects.nonNull(usuario) && passwordEncoder.matches(password, usuario.getPassword())) {
            return usuario;
        }
        return null;
    }

    public void save(Usuario usuario) {
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
        repository.save(usuario);
    }

    public boolean existsByEmail(String email) {
        return repository.existsByEmail(email);
    }

    public void encryptExistingPasswords() {
        List<Usuario> usuarios = repository.findAll();
        usuarios.stream().forEach(usuario -> {
            usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
            repository.save(usuario);
        });
    }
}
