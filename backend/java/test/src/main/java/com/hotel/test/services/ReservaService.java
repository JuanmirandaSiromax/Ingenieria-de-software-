package com.hotel.test.services;

import java.sql.Timestamp;
import java.time.temporal.ChronoUnit;
import java.util.List;

import com.hotel.test.dtos.ReservaRequest;
import com.hotel.test.entities.Habitacion;
import com.hotel.test.enums.Enums;
import org.springframework.stereotype.Service;

import com.hotel.test.entities.Reserva;
import com.hotel.test.repository.ReservaRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReservaService {

    private final ReservaRepository repository;
    private final HabitacionService habitacionService;

    public List<Reserva> getAllUser() {
        return repository.findAll();
    }

    public Reserva crearReserva(ReservaRequest request) {
        // Crear reserva
        Reserva reserva = new Reserva();
        reserva.setIdUsuario(request.getIdUsuario());
        reserva.setNumeroHabitacion(request.getNumeroHabitacion());

        // Convertir LocalDate a Timestamp
        Timestamp fechaInicio = Timestamp.valueOf(request.getFechaInicio().atStartOfDay());
        Timestamp fechaFin = Timestamp.valueOf(request.getFechaFin().atStartOfDay());

        reserva.setFechaInicio(fechaInicio);
        reserva.setFechaFin(fechaFin);

        // Calcular días de estadía y monto total
        long diasEstadia = java.time.temporal.ChronoUnit.DAYS.between(request.getFechaInicio(), request.getFechaFin());
        Habitacion habitacion = habitacionService.getByNumeroHabitacion(request.getNumeroHabitacion());

        reserva.setDiasEstadia((int) diasEstadia);
        reserva.setMontoTotal((int) (diasEstadia * habitacion.getPrecioDiario()));
        reserva.setMontoPagado(0);
        reserva.setEstadoReserva(Enums.EstadosReserva.pendiente);
        reserva.setEstadoPago(Enums.EstadosPago.pendiente);
        reserva.setMetodoPago(request.getMetodoPago());

        return repository.save(reserva);
    }

    public List<Reserva> getReservasByUsuario(Integer idUsuario) {
        return repository.getAllByIdUsuario(idUsuario);
    }

}
