import './App.css';
import Login from "./components/jwt/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/jwt/registro";
import AdminWelcome from "./components/welcome/AdminWelcome";
import ClienteWelcome from "./components/welcome/ClienteWelcome";
import OperadorWelcome from "./components/welcome/OperadorWelcome";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <Router>
            <div>
                <h1 className="title">Hotel Booking</h1>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>

                    {/* Rutas protegidas */}
                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute role="ROLE_ADMINISTRADOR">
                                <AdminWelcome/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/cliente"
                        element={
                            <ProtectedRoute role="ROLE_CLIENTE">
                                <ClienteWelcome/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/operador"
                        element={
                            <ProtectedRoute role="ROLE_EMPLEADO">
                                <OperadorWelcome/>
                            </ProtectedRoute>
                        }
                    />

                    {/* Ruta para acceso denegado */}
                    <Route path="/unauthorized" element={<h1>Acceso Denegado</h1>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
