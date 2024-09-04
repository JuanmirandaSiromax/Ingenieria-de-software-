package com.hotel.test.enums;

public class Enums {

    public enum Categoria {
        turista,
        premium
    }

    public enum EstadosPago {
        pendiente,
        pagado,
        fallido
    }

    public enum EstadosReserva {
        pendiente,
        confirmada,
        cancelada

    }

    public enum MetodosPago {
        tarjeta_credito,
        tarjeta_debito,
        otros
    }

    public enum EstadoHabitacion {
        disponible,
        reservada,
        ocupada,
        mantenimiento
    }

    public enum Roles {
        cliente,
        empleado,
        administrador
    }

    public enum TipoCliente {
        turista,
        premium
    }
}
