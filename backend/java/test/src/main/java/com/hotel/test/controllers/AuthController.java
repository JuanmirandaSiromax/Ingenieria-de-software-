package com.hotel.test.controllers;

import java.util.Objects;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.test.entities.JwtResponse;
import com.hotel.test.entities.Usuario;
import com.hotel.test.entities.UsuarioLoginRequest;
import com.hotel.test.services.JwtService;
import com.hotel.test.services.UsuarioService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final JwtService jwtService;
    private final UsuarioService usuarioService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UsuarioLoginRequest request) {
        Usuario usuario = usuarioService.validarUsuario(request.getEmail(), request.getPassword());
        if (Objects.nonNull(usuario)) {
            String token = jwtService.generateToken(usuario.getEmail(), usuario.getRol().name());
            return ResponseEntity.ok(new JwtResponse(token));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales inválidas");

    }

}
