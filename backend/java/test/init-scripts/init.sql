CREATE DATABASE IF NOT EXISTS hoteltest;
USE hoteltest;
##DROP TABLE IF EXISTS usuarios;
##DROP TABLE IF EXISTS habitaciones;
##DROP TABLE IF EXISTS reservas;

CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    telefono VARCHAR(15),
    password VARCHAR(60),
    rol ENUM('cliente', 'empleado', 'administrador'),
    # idioma_preferido ENUM('español', 'inglés'),
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS habitaciones (
    id_habitacion INT AUTO_INCREMENT PRIMARY KEY,
    numero_habitacion INT,
    categoria ENUM('turista', 'premium'),
    piso INT,
    descripcion TEXT,
    precio_diario INT,
    estado ENUM('disponible', 'reservada', 'ocupada', 'mantenimiento')
);

CREATE TABLE IF NOT EXISTS reservas (
    id_reserva INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_habitacion INT,
    fecha_inicio DATETIME,
    fecha_fin DATETIME,
    dias_estadia INT,
    monto_total INT,
    monto_pagado INT,
    estado_reserva ENUM('pendiente', 'confirmada', 'cancelada'),
    estado_pago ENUM('pendiente', 'pagado', 'fallido'),
    metodo_pago ENUM('tarjeta_credito', 'tarjeta_debito', 'paypal'),
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_habitacion) REFERENCES habitaciones(id_habitacion)
);

# Aquí se pueden insertar más mocks para probar
INSERT INTO usuarios (nombre,apellido,email,telefono,password,rol) VALUES
	 ('Diego','Escobar','diego.escobar@duocuc.cl','987654567','admin','administrador');
INSERT INTO usuarios (nombre,apellido,email,telefono,password,rol) VALUES
	 ('Alberto','Lizana','alberto.lizana@duocuc.cl','987654567','admin','administrador');
INSERT INTO usuarios (nombre,apellido,email,telefono,password,rol) VALUES
	 ('Juan','Miranda','juan.miranda@duocuc.cl','987654567','admin','administrador');
INSERT INTO usuarios (nombre,apellido,email,telefono,password,rol) VALUES
	 ('Wladimir','Rojas','wladimir.rojas@duocuc.cl','987654567','admin','administrador');
INSERT INTO usuarios (nombre,apellido,email,telefono,password,rol) VALUES
	 ('Admin','uno','admin@duocuc.cl','987654567','admin','administrador');
INSERT INTO usuarios (nombre,apellido,email,telefono,password,rol) VALUES
	 ('Cliente','Dos','cliente@duocuc.cl','987654567','cliente','cliente');
INSERT INTO usuarios (nombre,apellido,email,telefono,password,rol) VALUES
	 ('Operador','Tres','operador@duocuc.cl','987654567','operador','empleado');
