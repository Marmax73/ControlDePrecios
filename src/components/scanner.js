// Scanner.js

// src/components/ScannerButton.js
import React, { useRef, useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/browser';

const ScannerButton = ({ onScan }) => {
  const videoRef = useRef(null);
  const [scanning, setScanning] = useState(false);
  const codeReader = useRef(new BrowserMultiFormatReader());

  const handleStartScan = async () => {
    setScanning(true);

    try {
      const result = await codeReader.current.decodeOnceFromVideoDevice(undefined, videoRef.current);
      onScan(result.getText());
      setScanning(false);
    } catch (error) {
      console.error("Error escaneando:", error);
      setScanning(false);
    }
  };

  const handleStopScan = () => {
    codeReader.current.reset(); // Algunas versiones lo tienen, otras no
    setScanning(false);
  };

  return (
    <div>
      <button onClick={handleStartScan} disabled={scanning}>
        {scanning ? 'Escaneando...' : 'Iniciar escaneo'}
      </button>
      {scanning && (
        <div>
          <video ref={videoRef} style={{ width: '300px', marginTop: '1rem' }} />
          <button onClick={handleStopScan} style={{ marginTop: '1rem' }}>
            Detener escaneo
          </button>
        </div>
      )}
    </div>
  );
};

export default ScannerButton;
