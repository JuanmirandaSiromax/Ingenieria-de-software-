package com.hotel.test.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.hotel.test.entities.Habitacion;
import com.hotel.test.entities.Reserva;
import com.hotel.test.entities.Usuario;
import com.hotel.test.services.HabitacionService;
import com.hotel.test.services.ReservaService;
import com.hotel.test.services.UsuarioService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class ApiRest {

    private final UsuarioService usuarioService;
    private final HabitacionService habitacionService;
    private final ReservaService reservaService;

    @GetMapping("/user")
    public ResponseEntity<Usuario> getUser(@RequestParam Integer id) {
        return ResponseEntity.ok().body(usuarioService.getUserById(id));
    }

    @GetMapping("/booking")
    public Reserva getReserva(@RequestParam Integer id) {
        return reservaService.getUserById(id);
    }

    @GetMapping("/room")
    public Habitacion getHabitacion(@RequestParam Integer id) {
        return habitacionService.getUserById(id);
    }
    
}
