import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/adminWelcome.module.css';
import UsuariosList from "../usuario/UsuariosList";
import ListHabitaciones from "../admin/ListHabitaciones";
const AdminWelcome = () => {
    const navigate = useNavigate();
    const [showUserManagement, setShowUserManagement] = useState(false);
    const [showRoomManagement, setShowRoomManagement] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className={styles.welcomeContainer}>
            {!showUserManagement && !showRoomManagement ? (
                <>
                    <h2 className={styles.title}>Bienvenido, Administrador</h2>
                    <p className={styles.message}>Administra el sistema y los usuarios aquí.</p>
                    <ul>
                        <li>
                            <button
                                onClick={() => setShowUserManagement(true)}
                                className={styles.actionButton}
                            >
                                Gestionar Usuarios
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setShowRoomManagement(true)}
                                className={styles.actionButton}
                            >
                                Gestionar Habitaciones
                            </button>
                        </li>
                    </ul>
                    <button className={styles.logoutButton} onClick={handleLogout}>Cerrar Sesión</button>
                </>
            ) : showUserManagement ? (
                <>
                    <UsuariosList />
                    <button className={styles.backButton} onClick={() => setShowUserManagement(false)}>Volver</button>
                </>
            ) : (
                <>
                    <ListHabitaciones />
                    <button className={styles.backButton} onClick={() => setShowRoomManagement(false)}>Volver</button>
                </>
            )}
        </div>
    );
};

export default AdminWelcome;
