import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import {Link} from "react-router-dom";
import styles from '../../styles/registro.module.css';

const createUser = async (userData) => {
    const response = await axios.post('http://localhost:8080/admin/create-user', userData, {
        headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
};

const Register = () => {
    const [formData, setFormData] = useState({
        idUsuario: '',
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        password: '',
        rol: 'cliente',
    });

    const mutation = useMutation( {
        mutationFn: createUser,
        onSuccess: (data) => {
            console.log('Usuario creado con éxito:', data);
        },
        onError: (error) => {
            console.error('Error al crear usuario:', error);
        },
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({
            ...formData,
            enabled: true,
            accountNonExpired: true,
            credentialsNonExpired: true,
            accountNonLocked: true,
            username: formData.email,
        });
    };

    return (
        <div className={styles.registerContainer}>
            <div className={styles.registerBox}>
                <h2 className={styles.registerTitle}>Registrar Usuario</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Nombre"
                        className={styles.registerInput}
                        required
                    />
                    <input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        placeholder="Apellido"
                        className={styles.registerInput}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Correo electrónico"
                        className={styles.registerInput}
                        required
                    />
                    <input
                        type="text"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Teléfono"
                        className={styles.registerInput}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Contraseña"
                        className={styles.registerInput}
                        required
                    />
                    <button type="submit" className={styles.registerButton}>
                        Crear Cuenta
                    </button>
                </form>
                {mutation.isLoading && <p>Creando usuario...</p>}
                {mutation.isError && <p>Error al crear el usuario.</p>}
                {mutation.isSuccess && <p>Usuario creado exitosamente.</p>}
                <p className={styles.loginLink}>
                    ¿Ya tienes cuenta? <Link to="/">Inicia sesión aquí</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;