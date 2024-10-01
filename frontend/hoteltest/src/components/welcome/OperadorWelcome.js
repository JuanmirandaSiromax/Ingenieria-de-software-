import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './styles/operadorWelcome.module.css';

const OperadorWelcome = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Eliminar el token
        navigate('/'); // Redirigir al login
    };

    return (
        <div className={styles.welcomeContainer}>
            <h2 className={styles.title}>Bienvenido, Operador</h2>
            <p className={styles.message}>Gestiona las reservas y mantén las habitaciones en orden.</p>
            <button className={styles.logoutButton} onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
};

export default OperadorWelcome;