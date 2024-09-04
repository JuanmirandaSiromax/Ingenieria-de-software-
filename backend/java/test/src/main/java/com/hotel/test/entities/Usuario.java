package com.hotel.test.entities;

import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hotel.test.enums.Enums;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

@Entity
@Table(name = "usuarios")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Getter
public class Usuario {

    @Id
    @Column(name = "id_usuario")
    private Integer idUsuario;
    private String nombre;
    private String apellido;
    private String email;
    private String telefono;
    private String password;
    @Enumerated(EnumType.STRING)
    private Enums.Roles rol;
    @Column(name = "fecha_registro")
    private Timestamp fechaRegistro;

}
