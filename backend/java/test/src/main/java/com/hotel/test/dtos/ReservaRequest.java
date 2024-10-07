package com.hotel.test.dtos;

import com.hotel.test.enums.Enums;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class ReservaRequest {
    private Integer idUsuario;
    private Integer numeroHabitacion;
    private LocalDate fechaInicio;
    private LocalDate fechaFin;
    private Enums.MetodosPago metodoPago;

}