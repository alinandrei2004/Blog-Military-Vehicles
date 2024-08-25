import React from 'react';
import { useEffect, useState } from 'react';
import "./styles/App.css";
import Navbar from "./components/navbar";
import Frontpage from "./components/frontpage";

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
        data => {setBackendData(data)}
    )
  }, [])

  return (
      <div className='page'>
        <Navbar />
        <Frontpage />
      </div>
    );
}

export default App;