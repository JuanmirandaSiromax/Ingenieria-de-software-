import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles/HabitacionesDisponibles.module.css';

const HabitacionesDisponibles = () => {
    const [rooms, setRooms] = useState([]);
    const [reservationData, setReservationData] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8080/api/habitaciones-disponibles')
            .then(response => setRooms(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleReserve = (roomNumber) => {
        const data = {
            numeroHabitacion: roomNumber,
            fechaInicio: reservationData[roomNumber]?.fechaInicio || '',
            fechaFin: reservationData[roomNumber]?.fechaFin || '',
            idUsuario: localStorage.getItem('id')
        };

        axios.post('http://localhost:8080/api/reservar', data)
            .then(response => alert('Reserva exitosa'))
            .catch(error => console.error('Error al reservar:', error));
    };

    const handleDateChange = (roomNumber, field, value) => {
        setReservationData(prev => ({
            ...prev,
            [roomNumber]: {
                ...prev[roomNumber],
                [field]: value
            }
        }));
    };

    return (
        <div className={styles.availableRoomsContainer}>
            <h2 className={styles.title}>Habitaciones Disponibles</h2>
            <ul className={styles.roomList}>
                {rooms.map(room => (
                    <li key={room.numeroHabitacion} className={styles.roomItem}>
                        <p><strong>Habitación Número:</strong> {room.numeroHabitacion}</p>
                        <p><strong>Descripción:</strong> {room.descripcion}</p>
                        <p><strong>Precio Diario:</strong> ${room.precioDiario}</p>
                        <input
                            type="text"
                            placeholder="Fecha Inicio (yyyy-MM-dd)"
                            value={reservationData[room.numeroHabitacion]?.fechaInicio || ''}
                            onChange={(e) => handleDateChange(room.numeroHabitacion, 'fechaInicio', e.target.value)}
                            className={styles.dateInput}
                        />
                        <input
                            type="text"
                            placeholder="Fecha Fin (yyyy-MM-dd)"
                            value={reservationData[room.numeroHabitacion]?.fechaFin || ''}
                            onChange={(e) => handleDateChange(room.numeroHabitacion, 'fechaFin', e.target.value)}
                            className={styles.dateInput}
                        />
                        <button onClick={() => handleReserve(room.numeroHabitacion)} className={styles.reserveButton}>
                            Reservar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HabitacionesDisponibles;
