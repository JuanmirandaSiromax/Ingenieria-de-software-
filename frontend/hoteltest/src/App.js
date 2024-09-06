import './App.css';
import UsuarioDetail from './components/usuario/UsuarioDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* los comentarios deben tener esta estructura. 
      El componente inferior UsuarioDetail, va a imprimir el div que retorna */}
      <UsuarioDetail></UsuarioDetail>
      </header>
    </div>
  );
}

export default App;
