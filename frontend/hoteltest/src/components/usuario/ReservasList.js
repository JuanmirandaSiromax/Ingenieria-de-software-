import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './styles/ReservasList.module.css';

const ReservasList = () => {
    const [reservas, setReservas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchReservas = async () => {
            const token = localStorage.getItem('token');
            const userId = JSON.parse(atob(token.split('.')[1])).id;
            try {
                const response = await axios.get(`http://localhost:8080/api/reservas/usuario/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setReservas(response.data);
            } catch (error) {
                console.error('Error al obtener las reservas:', error);
            }
        };
        fetchReservas();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className={styles.reservasContainer}>
            <h2 className={styles.title}>Mis Reservas</h2>
            {reservas.length > 0 ? (
                <ul className={styles.reservasList}>
                    {reservas.map((reserva) => (
                        <li key={reserva.idReserva} className={styles.reservaItem}>
                            <p><strong>Habitación:</strong> {reserva.numeroHabitacion}</p>
                            <p><strong>Fecha Inicio:</strong> {new Date(reserva.fechaInicio).toLocaleDateString()}</p>
                            <p><strong>Fecha Fin:</strong> {new Date(reserva.fechaFin).toLocaleDateString()}</p>
                            <p><strong>Días de Estadia:</strong> {reserva.diasEstadia}</p>
                            <p><strong>Monto Total:</strong> ${reserva.montoTotal}</p>
                            <p><strong>Estado de Reserva:</strong> <span className={styles.status}>{reserva.estadoReserva}</span></p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={styles.noReservations}>No tienes reservas activas.</p>
            )}
            <button onClick={handleLogout} className={styles.logoutButton}>Cerrar Sesión</button>
        </div>
    );
};

export default ReservasList;
