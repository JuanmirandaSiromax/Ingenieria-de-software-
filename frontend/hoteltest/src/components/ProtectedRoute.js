import React from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from "jwt-decode";

// Componente para proteger rutas
const ProtectedRoute = ({ children, role }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        // Si no hay token, redirigir al login
        return <Navigate to="/" />;
    }

    try {
        const decodedToken = jwtDecode(token);
        const userRole = decodedToken.role;

        if (role !== userRole) {
            // Si el rol no coincide, redirigir a una página de acceso denegado o a otra página
            return <Navigate to="/unauthorized" />;
        }

        // Si el rol coincide, renderizar el componente hijo
        return children;
    } catch (error) {
        // Si ocurre algún error con el token, redirigir al login
        return <Navigate to="/" />;
    }
};

export default ProtectedRoute;