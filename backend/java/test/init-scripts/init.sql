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
    numero_habitacion INT PRIMARY KEY,
    categoria ENUM('turista', 'premium'),
    piso INT,
    descripcion TEXT,
    precio_diario INT,
    estado ENUM('disponible', 'reservada', 'ocupada', 'mantenimiento')
);

CREATE TABLE IF NOT EXISTS reservas (
    id_reserva INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    numero_habitacion INT,
    fecha_inicio DATETIME,
    fecha_fin DATETIME,
    dias_estadia INT,
    monto_total INT,
    monto_pagado INT,
    estado_reserva ENUM('pendiente', 'confirmada', 'cancelada'),
    estado_pago ENUM('pendiente', 'pagado', 'fallido'),
    metodo_pago ENUM('tarjeta_credito', 'tarjeta_debito', 'otros'),
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (numero_habitacion) REFERENCES habitaciones(numero_habitacion)
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
	 ('Cliente','Uno','cliente1@duocuc.cl','987654567','cliente','cliente');
INSERT INTO usuarios (nombre,apellido,email,telefono,password,rol) VALUES
    ('Cliente','Dos','cliente2@duocuc.cl','987654567','cliente','cliente');
INSERT INTO usuarios (nombre,apellido,email,telefono,password,rol) VALUES
    ('Cliente','Tres','cliente3@duocuc.cl','987654567','cliente','cliente');
INSERT INTO usuarios (nombre,apellido,email,telefono,password,rol) VALUES
	 ('Operador','Tres','operador@duocuc.cl','987654567','operador','empleado');

INSERT INTO habitaciones (numero_habitacion, categoria, piso, descripcion, precio_diario, estado) VALUES
(102, 'turista', 1, 'Habitacion turista en el primer piso', 50000, 'reservada'),
(101, 'turista', 1, 'Habitacion turista en el primer piso', 50000, 'reservada'),
(103, 'turista', 1, 'Habitacion turista en el primer piso', 50000, 'disponible'),
(104, 'turista', 1, 'Habitacion turista en el primer piso', 50000, 'disponible'),
(105, 'turista', 1, 'Habitacion turista en el primer piso', 50000, 'mantenimiento'),
(106, 'turista', 1, 'Habitacion turista en el primer piso', 50000, 'disponible'),

(201, 'turista', 2, 'Habitacion turista en el segundo piso', 50000, 'disponible'),
(202, 'turista', 2, 'Habitacion turista en el segundo piso', 50000, 'reservada'),
(203, 'turista', 2, 'Habitacion turista en el segundo piso', 50000, 'ocupada'),
(204, 'turista', 2, 'Habitacion turista en el segundo piso', 50000, 'ocupada'),
(205, 'turista', 2, 'Habitacion turista en el segundo piso', 50000, 'reservada'),
(206, 'turista', 2, 'Habitacion turista en el segundo piso', 50000, 'ocupada'),

(301, 'turista', 3, 'Habitacion turista en el tercer piso', 50000, 'reservada'),
(302, 'turista', 3, 'Habitacion turista en el tercer piso', 50000, 'reservada'),
(303, 'turista', 3, 'Habitacion turista en el tercer piso', 50000, 'mantenimiento'),
(304, 'turista', 3, 'Habitacion turista en el tercer piso', 50000, 'ocupada'),
(305, 'turista', 3, 'Habitacion turista en el tercer piso', 50000, 'mantenimiento'),
(306, 'turista', 3, 'Habitacion turista en el tercer piso', 50000, 'disponible'),

(401, 'turista', 4, 'Habitacion turista en el cuarto piso', 50000, 'disponible'),
(402, 'turista', 4, 'Habitacion turista en el cuarto piso', 50000, 'disponible'),
(403, 'turista', 4, 'Habitacion turista en el cuarto piso', 50000, 'ocupada'),
(404, 'turista', 4, 'Habitacion turista en el cuarto piso', 50000, 'disponible'),
(405, 'turista', 4, 'Habitacion turista en el cuarto piso', 50000, 'disponible'),
(406, 'turista', 4, 'Habitacion turista en el cuarto piso', 50000, 'disponible'),

(501, 'turista', 5, 'Habitacion turista en el quinto piso', 50000, 'disponible'),
(502, 'turista', 5, 'Habitacion turista en el quinto piso', 50000, 'disponible'),
(503, 'turista', 5, 'Habitacion turista en el quinto piso', 50000, 'disponible'),
(504, 'turista', 5, 'Habitacion turista en el quinto piso', 50000, 'mantenimiento'),
(505, 'turista', 5, 'Habitacion turista en el quinto piso', 50000, 'ocupada'),
(506, 'turista', 5, 'Habitacion turista en el quinto piso', 50000, 'mantenimiento');

INSERT INTO habitaciones (numero_habitacion, categoria, piso, descripcion, precio_diario, estado) VALUES
(601, 'premium', 6, 'Habitacion premium en el sexto piso', 120000, 'mantenimiento'),
(602, 'premium', 6, 'Habitacion premium en el sexto piso', 120000, 'ocupada'),
(603, 'premium', 6, 'Habitacion premium en el sexto piso', 120000, 'disponible'),
(604, 'premium', 6, 'Habitacion premium en el sexto piso', 120000, 'disponible'),

(701, 'premium', 7, 'Habitacion premium en el septimo piso', 120000, 'reservada'),
(702, 'premium', 7, 'Habitacion premium en el septimo piso', 120000, 'ocupada'),
(703, 'premium', 7, 'Habitacion premium en el septimo piso', 120000, 'reservada'),
(704, 'premium', 7, 'Habitacion premium en el septimo piso', 120000, 'disponible');

-- Reservas para habitaciones reservadas y ocupadas para Clientes
-- Cliente Uno
INSERT INTO reservas (id_usuario, numero_habitacion, fecha_inicio, fecha_fin, dias_estadia, monto_total, monto_pagado, estado_reserva, estado_pago, metodo_pago) VALUES
(6, 102, '2024-10-01', '2024-10-05', 4, 200000, 200000, 'confirmada', 'pagado', 'tarjeta_credito'),
(6, 203, '2024-10-06', '2024-10-08', 2, 100000, 50000, 'confirmada', 'pendiente', 'tarjeta_debito');

-- Cliente Dos
INSERT INTO reservas (id_usuario, numero_habitacion, fecha_inicio, fecha_fin, dias_estadia, monto_total, monto_pagado, estado_reserva, estado_pago, metodo_pago) VALUES
(7, 302, '2024-10-03', '2024-10-07', 4, 200000, 200000, 'confirmada', 'pagado', 'otros'),
(7, 403, '2024-10-09', '2024-10-12', 3, 150000, 150000, 'confirmada', 'pagado', 'tarjeta_debito');

-- Cliente Tres
INSERT INTO reservas (id_usuario, numero_habitacion, fecha_inicio, fecha_fin, dias_estadia, monto_total, monto_pagado, estado_reserva, estado_pago, metodo_pago) VALUES
(8, 702, '2024-10-02', '2024-10-06', 4, 480000, 480000, 'confirmada', 'pagado', 'tarjeta_credito'),
(8, 205, '2024-10-10', '2024-10-15', 5, 250000, 250000, 'confirmada', 'pagado', 'otros');

-- Adicionales
-- Reservas futuras para simular demanda
INSERT INTO reservas (id_usuario, numero_habitacion, fecha_inicio, fecha_fin, dias_estadia, monto_total, monto_pagado, estado_reserva, estado_pago, metodo_pago) VALUES
(6, 103, '2024-11-05', '2024-11-10', 5, 250000, 0, 'pendiente', 'pendiente', 'tarjeta_credito'),
(7, 701, '2024-12-01', '2024-12-04', 3, 360000, 0, 'pendiente', 'pendiente', 'otros');

-- Reservas en habitaciones premium
INSERT INTO reservas (id_usuario, numero_habitacion, fecha_inicio, fecha_fin, dias_estadia, monto_total, monto_pagado, estado_reserva, estado_pago, metodo_pago) VALUES
(8, 703, '2024-10-15', '2024-10-20', 5, 600000, 300000, 'confirmada', 'pendiente', 'tarjeta_debito');

