import './App.css';
import Login from "./components/jwt/login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* los comentarios deben tener esta estructura. 
      El componente inferior UsuarioDetail, va a imprimir el div que retorna */}
          <Login />
      </header>
    </div>
  );
}

export default App;
