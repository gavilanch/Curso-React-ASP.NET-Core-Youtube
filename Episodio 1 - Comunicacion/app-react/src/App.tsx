import axios, { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import './App.css';
import {urlClimas} from './endpoints';

function App() {

  useEffect(() => {
    axios.get(urlClimas)
      .then((respuesta: AxiosResponse<any>) => {
        console.log(respuesta.data);
      })
  }, [])

  return (
    <>
      <h1>Mi app de react</h1>
      <p>Comunicacion entre ASP.NET Core y React</p>
    </>
  );
}

export default App;
