import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUsuarios = async() => {
    const response = await axios.get('http://localhost:8080/api/users');
    return response.data;
};

const UsuariosList = () => {
    const {data:usuarios, isLoading, error } = useQuery(['usuarios'], fetchUsuarios);

    if (isLoading) return <p>Cargando usuarios</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Lista de usuarios</h2>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>{usuario.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default UsuariosList;