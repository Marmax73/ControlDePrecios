
import './App.css';
import Scanner from './components/scanner';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Escanée el producto</h3>
        <h5>Utilice la cámara de su móvil</h5>
        
       

      </header>
      return (
        <Scanner
          onResult={(result) => {
            alert(`Código de barras escaneado: ${result}`);
          }}
        />
      )
    </div>
  );
}

export default App;
