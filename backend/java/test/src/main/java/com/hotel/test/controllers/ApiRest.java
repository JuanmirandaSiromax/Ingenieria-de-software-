package com.hotel.test.controllers;

import com.hotel.test.dtos.ReservaRequest;
import com.hotel.test.enums.Enums;
import org.springframework.web.bind.annotation.*;

import com.hotel.test.entities.Habitacion;
import com.hotel.test.entities.Reserva;
import com.hotel.test.entities.Usuario;
import com.hotel.test.services.HabitacionService;
import com.hotel.test.services.ReservaService;
import com.hotel.test.services.UsuarioService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;
import java.util.Optional;

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
    public ResponseEntity<Usuario> getUser(@RequestParam Integer id) {
        return ResponseEntity.ok().body(usuarioService.getUserById(id));
    }

    @GetMapping("/habitaciones-disponibles")
    public ResponseEntity<List<Habitacion>> getHabitacionesDisponibles() {
        return ResponseEntity.ok(habitacionService.verDisponibles());
    }

    @GetMapping("/reservas/usuario/{idUsuario}")
    public List<Reserva> getReservasByUsuario(@PathVariable Integer idUsuario) {
        return reservaService.getReservasByUsuario(idUsuario);
    }

    @PostMapping("/reservar")
    public ResponseEntity<String> realizarReserva(@RequestBody ReservaRequest reservaRequest) {
        Habitacion habitacion = habitacionService.getByNumeroHabitacion(reservaRequest.getNumeroHabitacion());

        if (!habitacion.getEstado().equals(Enums.EstadoHabitacion.disponible)) {
            return ResponseEntity.badRequest().body("La habitación no está disponible");
        }

        habitacionService.actualizarEstadoHabitacion(reservaRequest.getNumeroHabitacion(), Enums.EstadoHabitacion.reservada);

        Reserva reserva = reservaService.crearReserva(reservaRequest);

        return ResponseEntity.ok("Reserva realizada con éxito, ID: " + reserva.getIdReserva());
    }

}
