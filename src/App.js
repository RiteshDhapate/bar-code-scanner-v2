import { Html5QrcodeScanner } from 'html5-qrcode';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [result, setResult] = useState(null);
  useEffect(() => { 
    function onScanSuccess(decodedText, decodedResult) {
       setResult( decodedText);
       // handle the scanned code as you like, for example:
       console.log(`Code matched = ${decodedText}`, decodedResult);
     }

     function onScanFailure(error) {
       // handle scan failure, usually better to ignore and keep scanning.
       // for example:
       console.warn(`Code scan error = ${error}`);
     }

     let html5QrcodeScanner = new Html5QrcodeScanner(
       "reader",
       { fps: 10, qrbox: { width: 250, height: 250 } },
       /* verbose= */ false
     );
     html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  },[])
  return (
    <div className="App">
      <div id="reader"></div>
      <br />
      <h1>{ result}</h1>
    </div>
  );
}

export default App;
