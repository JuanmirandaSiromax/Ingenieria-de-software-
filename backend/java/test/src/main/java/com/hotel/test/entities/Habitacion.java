package com.hotel.test.entities;

import com.hotel.test.enums.Enums;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

@Entity
@Table(name = "habitaciones")
@Getter
public class Habitacion {

    @Id
    @Column(name = "id_habitacion")
    private Integer idHabitacion;
    @Column(name = "numero_habitacion")
    private Integer numeroHabitacion;
    @Enumerated(EnumType.STRING)
    private Enums.Categoria categoria;
    private Integer piso;
    private String descripcion;
    @Column(name = "precio_diario")
    private Integer precioDiario;
    @Enumerated(EnumType.STRING)
    private Enums.EstadoHabitacion estado;
}
