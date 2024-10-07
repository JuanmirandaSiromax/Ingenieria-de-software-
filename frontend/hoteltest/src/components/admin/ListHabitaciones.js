import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles/ListHabitaciones.module.css';

const ListHabitaciones = () => {
    const [habitaciones, setHabitaciones] = useState([]);
    const [estadoFiltro, setEstadoFiltro] = useState('');
    const [pisoFiltro, setPisoFiltro] = useState('');

    useEffect(() => {
        const fetchHabitaciones = async () => {
            try {
                const response = await axios.get('http://localhost:8080/admin/list-habitacion');
                setHabitaciones(response.data);
            } catch (error) {
                console.error("Error al obtener habitaciones:", error);
            }
        };
        fetchHabitaciones();
    }, []);

    const handleEstadoChange = (e) => {
        setEstadoFiltro(e.target.value);
    };

    const handlePisoChange = (e) => {
        setPisoFiltro(e.target.value);
    };

    const habitacionesFiltradas = habitaciones.filter(habitacion => {
        return (estadoFiltro === '' || habitacion.estado === estadoFiltro) &&
            (pisoFiltro === '' || habitacion.piso === parseInt(pisoFiltro));
    });

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Lista de Habitaciones</h2>

            <div className={styles.filters}>
                <label htmlFor="estado">Filtrar por Estado:</label>
                <select id="estado" value={estadoFiltro} onChange={handleEstadoChange}>
                    <option value="">Todos</option>
                    <option value="disponible">Disponible</option>
                    <option value="reservada">Reservada</option>
                    <option value="ocupada">Ocupada</option>
                    <option value="mantenimiento">Mantenimiento</option>
                </select>

                <label htmlFor="piso">Filtrar por Piso:</label>
                <input
                    type="number"
                    id="piso"
                    value={pisoFiltro}
                    onChange={handlePisoChange}
                    placeholder="Piso"
                />
            </div>

            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Número</th>
                    <th>Categoría</th>
                    <th>Piso</th>
                    <th>Descripción</th>
                    <th>Precio Diario</th>
                    <th>Estado</th>
                </tr>
                </thead>
                <tbody>
                {habitacionesFiltradas.map(habitacion => (
                    <tr key={habitacion.idHabitacion}>
                        <td>{habitacion.numeroHabitacion}</td>
                        <td>{habitacion.categoria}</td>
                        <td>{habitacion.piso}</td>
                        <td>{habitacion.descripcion}</td>
                        <td>{habitacion.precioDiario}</td>
                        <td>{habitacion.estado}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListHabitaciones;
