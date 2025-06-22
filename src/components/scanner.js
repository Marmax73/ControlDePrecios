// src/components/BarcodeScanner.js
import React, { useRef, useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/browser';

const BarcodeScanner = ({ onScanComplete }) => {
  const videoRef = useRef(null);
  const codeReader = useRef(new BrowserMultiFormatReader());
  const [scanning, setScanning] = useState(false);

  const startScan = async () => {
    setScanning(true);
    try {
      const result = await codeReader.current.decodeOnceFromVideoDevice(undefined, videoRef.current);
      const codigo = result.getText();

      const mockProducto = {
        id: Date.now(),
        producto: `Producto-${codigo.slice(-4)}`, // ejemplo ficticio
        fecha: new Date().toLocaleString(),
        precio: (Math.random() * 100).toFixed(2),
      };

      onScanComplete(mockProducto);
      stopScan();
    } catch (error) {
      console.error("❌ Error escaneando:", error);
      setScanning(false);
    }
  };

  const stopScan = () => {
    try {
      codeReader.current.stopDecoding();
    } catch (e) {
      console.warn("No se pudo detener el escáner:", e);
    }
    setScanning(false);
  };

  return (
    <div>
      {!scanning && (
        <button onClick={startScan} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Escanear
        </button>
      )}

      {scanning && (
        <div style={{ marginTop: '1rem' }}>
          <video ref={videoRef} style={{ width: '100%', maxWidth: '400px' }} />
        </div>
      )}
    </div>
  );
};

export default BarcodeScanner;
