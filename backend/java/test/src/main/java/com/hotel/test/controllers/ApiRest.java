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
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api") // esto crea la ruta principal que viene después de localhost:8080/
@CrossOrigin(origins = "http://localhost:3000") //esto permite que al ejecutar en local, se pueda llamar desde front
@RequiredArgsConstructor
public class ApiRest {

    private final UsuarioService usuarioService;
    private final HabitacionService habitacionService;
    private final ReservaService reservaService;

    //endpoint para obtener un usuario de acuerdo a un id, la ruta completa quedaría como locahost:8080/api/user?id={id}
    @GetMapping("/user")
    @PreAuthorize("hasRole('ADMINISTRADOR')")
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
