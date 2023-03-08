import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  //test return
  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <form >
      <input
        type="text"
        placeholder="Nombre de usuario"
        
      />
      </form>
      <Card />
    </div>
  );
}

export default App;
