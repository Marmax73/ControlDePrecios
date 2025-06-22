
import './App.css';
import BarcodeScanner from './components/scanner';
import React, { useState } from 'react';


function App() {
   const [resultados, setResultados] = useState([]);

  const manejarEscaneo = (nuevoObjeto) => {
    setResultados((prev) => [...prev, nuevoObjeto]);
    alert(`✅ Escaneado: ${nuevoObjeto.producto}`);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>Escáner de Códigos</h2>
      <BarcodeScanner onScanComplete={manejarEscaneo} />

      <h3 style={{ marginTop: '2rem' }}>📋 Resultados (mock):</h3>
      <ul>
        {resultados.map((item) => (
          <li key={item.id}>
            <strong>{item.producto}</strong> — ${item.precio} — {item.fecha}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



