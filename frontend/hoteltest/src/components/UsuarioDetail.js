// src/components/UsuarioDetail.js
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUsuarioById = async (id) => {
  console.log(`Fetching usuario with ID: ${id}`); // Log para ver qué ID se está utilizando
  const response = await axios.get(`http://localhost:8080/api/user?id=${id}`); // Reemplaza con tu endpoint real
  console.log('Data fetched:', response.data); // Log para ver los datos obtenidos
  return response.data;
};

const UsuarioDetail = () => {
  const [userId, setUserId] = useState(''); // Estado para almacenar el ID del usuario ingresado
  const [searchId, setSearchId] = useState(null); // Estado para almacenar el ID para la consulta

  const { data: usuario, isLoading, error } = useQuery({
    queryKey: ['usuario', searchId],
    queryFn: () => fetchUsuarioById(searchId),
    enabled: !!searchId, // Solo ejecuta la consulta si searchId no es null
  });

  console.log('Estado de la consulta:', { usuario, isLoading, error }); // Log para verificar el estado de la consulta

  const handleSearch = () => {
    console.log('Buscando usuario con ID:', userId); // Log para ver el ID ingresado por el usuario
    setSearchId(userId); // Actualiza el estado con el ID ingresado
  };

  return (
    <div>
      <h2>Consultar Usuario por ID</h2>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Ingrese ID del usuario"
      />
      <button onClick={handleSearch}>Buscar Usuario</button>

      {isLoading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}

      {usuario && (
        <div>
          <h3>Detalles del Usuario</h3>
          <p>ID: {usuario.idUsuario}</p>
          <p>Nombre: {usuario.nombre}</p>
          <p>Apellido: {usuario.apellido ? usuario.apellido : 'N/A'}</p>
          <p>Email: {usuario.email ? usuario.email : 'N/A'}</p>
          <p>Teléfono: {usuario.telefono ? usuario.telefono : 'N/A'}</p>
          <p>Rol: {usuario.rol ? usuario.rol : 'N/A'}</p>
          <p>Fecha de Registro: {usuario.fechaRegistro}</p>
        </div>
      )}
    </div>
  );
};

export default UsuarioDetail;
