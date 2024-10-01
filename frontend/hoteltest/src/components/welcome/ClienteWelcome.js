import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './styles/clienteWelcome.module.css';

const ClienteWelcome = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Eliminar el token
        navigate('/'); // Redirigir al login
    };

    return (
        <div className={styles.welcomeContainer}>
            <h2 className={styles.title}>Bienvenido, Cliente</h2>
            <p className={styles.message}>Explora nuestras ofertas y reserva tus habitaciones aquí.</p>
            <ul>
                <li><a href="/cliente/book-room">Reservar Habitación</a></li>
                <li><a href="/cliente/my-reservations">Mis Reservas</a></li>
            </ul>
            <button className={styles.logoutButton} onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
};

export default ClienteWelcome;