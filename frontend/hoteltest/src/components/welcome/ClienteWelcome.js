// ClienteWelcome.js
import React, { useState } from 'react';
import ReservasList from "../usuario/ReservasList";
import HabitacionesDisponibles from "../usuario/HabitacionesDisponibles";
import styles from './styles/clienteWelcome.module.css';

const ClienteWelcome = () => {
    const [view, setView] = useState('home');

    return (
        <div className={styles.welcomeContainer}>
            <h2 className={styles.title}>Bienvenido, Cliente</h2>
            <div className={styles.buttonContainer}>
                <button onClick={() => setView('reservas')} className={styles.actionButton}>Mis Reservas</button>
                <button onClick={() => setView('reservar')} className={styles.actionButton}>Reservar Habitación</button>
            </div>

            {view === 'reservas' && <ReservasList />}
            {view === 'reservar' && <HabitacionesDisponibles />}
        </div>
    );
};

export default ClienteWelcome;
