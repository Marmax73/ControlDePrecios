// Scanner.js
import React, { useEffect } from 'react';
import { BrowserMultiFormatReader } from '@zxing/browser';

const Scanner = ({ onResult }) => {
  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    codeReader
      .decodeOnceFromVideoDevice(undefined, 'reader')
      .then((result) => {
        onResult(result.getText());
      })
      .catch((err) => console.error(err));

    return () => {
      // En lugar de reset()
      try {
        codeReader.stopDecoding(); // o stopContinuousDecode()
      } catch (e) {
        console.warn('Error al detener el escaneo:', e);
      }
    };
  }, [onResult]);

  return <div id="reader" style={{ width: '500px' }} />;
};

export default Scanner;
