import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles/UsuariosList.module.css';

const UsuariosList = () => {
    const [users, setUsers] = useState([]);
    const [filterRole, setFilterRole] = useState('all');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/admin/list-user');
                setUsers(response.data);
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleRoleChange = (event) => {
        setFilterRole(event.target.value);
    };

    const handleDeleteUser = async (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
            try {
                await axios.delete(`http://localhost:8080/admin/delete-user/${id}`);
                // Actualizar la lista de usuarios después de la eliminación
                setUsers(users.filter((user) => user.idUsuario !== id));
                alert('Usuario eliminado con éxito.');
            } catch (error) {
                console.error('Error al eliminar usuario:', error);
                alert('Hubo un problema al eliminar el usuario.');
            }
        }
    };

    const filteredUsers = users.filter((user) =>
        filterRole === 'all' ? true : user.rol === filterRole
    );


    return (
        <div className={styles.managementContainer}>
            <h2 className={styles.title}>Gestión de Usuarios</h2>
            <div className={styles.filterContainer}>
                <label htmlFor="roleFilter">Filtrar por rol:</label>
                <select
                    id="roleFilter"
                    value={filterRole}
                    onChange={handleRoleChange}
                    className={styles.filterSelect}
                >
                    <option value="all">Todos</option>
                    <option value="administrador">Administrador</option>
                    <option value="cliente">Cliente</option>
                    <option value="empleado">Operador</option>
                </select>
            </div>

            <table className={styles.userTable}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                    <th>Rol</th>
                    <th>Acciones</th> {/* Nueva columna para los botones */}
                </tr>
                </thead>
                <tbody>
                {filteredUsers.map((user) => (
                    <tr key={user.idUsuario}>
                        <td>{user.idUsuario}</td>
                        <td>{user.nombre}</td>
                        <td>{user.apellido}</td>
                        <td>{user.email}</td>
                        <td>{user.telefono}</td>
                        <td>{user.rol}</td>
                        <td>
                            <button
                                className={styles.deleteButton}
                                onClick={() => handleDeleteUser(user.idUsuario)}
                            >
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsuariosList;
