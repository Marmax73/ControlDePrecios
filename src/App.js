
import './App.css';
import ScannerButton from './components/scanner';



function App() {
  const handleResult = (result) => {
    alert(`📦 Código escaneado: ${result}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Escanée el producto</h3>
        <h5>Utilice la cámara de su móvil</h5>
      </header>
      
      { <div style={{ padding: '2rem'}}>
        <h1>Escáner con botón</h1>
        <ScannerButton onScan={handleResult} />
      </div> }
    </div>
  );
}

export default App;



