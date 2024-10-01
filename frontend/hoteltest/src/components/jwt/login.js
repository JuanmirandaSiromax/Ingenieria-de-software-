import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import styles from '../../styles/login.module.css';
import {jwtDecode} from "jwt-decode";

const loginUser = async (credentials) => {
    const response = await axios.post('http://localhost:8080/login', credentials);
    return response.data;
};

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
            const decodedToken = jwtDecode(data.token);
            const userRole = decodedToken.role;
            // Redirigir según el rol
            if (userRole === 'ROLE_ADMINISTRADOR') {
                navigate('/admin');
            } else if (userRole === 'ROLE_CLIENTE') {
                navigate('/cliente');
            } else if (userRole === 'ROLE_EMPLEADO') {
                navigate('/operador');
            }
        },
        onError: (error) => {
            alert(`Error: ${error.response?.data?.message || 'Error al iniciar sesión'}`);
        },
    });

    const handleLogin = (e) => {
        e.preventDefault(); // Previene que el formulario realice el comportamiento por defecto
        mutation.mutate({ email, password });
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h2 className={styles.loginTitle}>Iniciar Sesión</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Correo Electrónico"
                        className={styles.loginInput}
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Contraseña"
                        className={styles.loginInput}
                        required
                    />
                    <button type="submit" className={styles.loginButton} disabled={mutation.isLoading}>
                        {mutation.isLoading ? 'Cargando...' : 'Iniciar Sesión'}
                    </button>
                </form>
                {mutation.isError && <p className={styles.errorText}>Error: {mutation.error.message}</p>}
                <p className={styles.registerLink}>
                    ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;