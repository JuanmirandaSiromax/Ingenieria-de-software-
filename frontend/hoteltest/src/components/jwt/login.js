import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const loginUser = async (credentials) => {
    const response = await axios.post('http://localhost:8080/login', credentials);
    console.log(response.data);
    return response.data;
};

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const mutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
            alert('Inicio de sesión exitoso');
        },
        onError: (error) => {
            alert(`Error: ${error.response?.data?.message || 'Error al iniciar sesión'}`);
        },
    });

    const handleLogin = () => {
        mutation.mutate({ email, password });
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo Electrónico"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
            />
            <button onClick={handleLogin} disabled={mutation.isLoading}>
                {mutation.isLoading ? 'Cargando...' : 'Iniciar Sesión'}
            </button>
            {mutation.isError && <p>Error: {mutation.error.message}</p>}
        </div>
    );
};

export default Login;