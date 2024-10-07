package com.hotel.test.controllers;

import com.hotel.test.services.HabitacionService;
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
    private final HabitacionService habitacionService;

    @PostMapping("/create-user")
    public ResponseEntity<?> createUser(@RequestBody Usuario usuario) {
        if (usuarioService.existsByEmail(usuario.getEmail())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("El email ya existe");
        }
        usuarioService.save(usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body("Usuario creado exitosamente");

    }

    @GetMapping("/list-user")
    public ResponseEntity<?> listUser() {
        return ResponseEntity.ok(usuarioService.getAllUser());
    }

    @DeleteMapping("/delete-user/{id}")
    public ResponseEntity<Void> deleteUsuario(@PathVariable Integer id) {
            usuarioService.deleteUserById(id);
            return ResponseEntity.noContent().build();
    }

    @GetMapping("/list-habitacion")
    public ResponseEntity<?> listHabitacion() {
        return ResponseEntity.ok(habitacionService.getAllRoom());
    }
}
