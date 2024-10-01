import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/adminWelcome.module.css';


const AdminWelcome = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Eliminar el token
        navigate('/'); // Redirigir al login
    };

    return (
        <div className={styles.welcomeContainer}>
            <h2 className={styles.title}>Bienvenido, Administrador</h2>
            <p className={styles.message}>Administra el sistema y los usuarios aquí.</p>
            <ul>
                <li><a href="/admin/manage-users">Gestionar Usuarios</a></li>
                <li><a href="/admin/manage-rooms">Gestionar Habitaciones</a></li>
            </ul>
            <button className={styles.logoutButton} onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
};

export default AdminWelcome;