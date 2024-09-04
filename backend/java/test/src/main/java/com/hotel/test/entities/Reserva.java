package com.hotel.test.entities;

import java.sql.Timestamp;

import com.hotel.test.enums.Enums;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

@Entity
@Table(name = "reservas")
@Getter
public class Reserva {

    @Id
    @Column(name = "id_reserva")
    private Integer idReserva;
    @Column(name = "id_usuario")
    private Integer idUsuario;
    @Column(name = "id_habitacion")
    private Integer idHabitacion;
    @Column(name = "fecha_inicio")
    private Timestamp fechaInicio;
    @Column(name = "fecha_fin")
    private Timestamp fechaFin;
    @Column(name = "dias_estadia")
    private Integer diasEstadia;
    @Column(name = "monto_total")
    private Integer montoTotal;
    @Column(name = "monto_pagado")
    private Integer montoPagado;
    @Column(name = "estado_reserva")
    @Enumerated(EnumType.STRING)
    private Enums.EstadosReserva estadoReserva;
    @Column(name = "estado_pago")
    @Enumerated(EnumType.STRING)
    private Enums.EstadosPago estadoPago;
    @Column(name = "metodo_pago")
    @Enumerated(EnumType.STRING)
    private Enums.MetodosPago metodoPago;
    @Column(name = "fecha_creacion")
    private Timestamp fechaCreacion;

}
