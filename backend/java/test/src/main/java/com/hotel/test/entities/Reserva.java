package com.hotel.test.entities;

import java.sql.Timestamp;

import com.hotel.test.enums.Enums;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "reservas")
@Getter
@Setter
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_reserva")
    private Integer idReserva;
    @Column(name = "id_usuario")
    private Integer idUsuario;
    @Column(name = "numero_habitacion")
    private Integer numeroHabitacion;
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
    @CreationTimestamp
    private Timestamp fechaCreacion;

}
