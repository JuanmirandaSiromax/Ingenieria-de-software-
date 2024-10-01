package com.hotel.test.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.hotel.test.entities.Usuario;
import com.hotel.test.services.UsuarioService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class AdminController {
    
    private final UsuarioService usuarioService;

    //@PreAuthorize("hasRole('ADMINISTRADOR')")
    @PostMapping("/create-user")
    public ResponseEntity<?> createUser(@RequestBody Usuario usuario) {
        if (usuarioService.existsByEmail(usuario.getEmail())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("El email ya existe");
        }
        usuarioService.save(usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body("Usuario creado exitosamente");

    }
}
