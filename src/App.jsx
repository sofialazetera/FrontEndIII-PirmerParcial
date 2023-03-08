import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  //Creo los states
  const [userName, setUserName] = useState("");
  const [favouritePet, setFavouritePet] = useState("");
  const [isInputInformationOk, setIsInputInformationOk] =useState({inputs: true, submit:false})

  //creo los actualizadores de estados
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeFavouritePet = (e) => setFavouritePet(e.target.value);

  console.log(favouritePet)
  console.log(userName)

  //creo las validaciones para el formulario
  const validateUserName = (userName) => {
    if (userName.length > 2 && userName[0] != " ") {
      return true;
    } else {
      return false;
    }
  };
  const validateFavouritePet = (pet) => {
    if (pet.length > 5){
      return true;
    }else {
      return false
    }
  }

  //creo el evento en submit
  const onSubmitForm = (e) => {
    e.preventDefault();
    const isNameValid = validateUserName(userName);
    const isAnimalValid = validateFavouritePet(favouritePet);
    (!isNameValid || !isAnimalValid)
      ? setIsInputInformationOk({inputs:false,submit:false }) :setIsInputInformationOk({inputs:true,submit:true }) 
  };

  return (
    <div className="App">
      <div>
      <h1>Animal favorito</h1>
      <form onSubmit={onSubmitForm}>
        <div>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            value={userName}
            onChange={onChangeUserName}
          />
        </div>
        <div>

          <input
            type="text"
            placeholder="Ingrese su animal favorito"
            value={favouritePet}
            onChange={onChangeFavouritePet}
          />

        </div>
        <button>
          Enviar
        </button>
      </form>
      </div>
      <p style={{display:isInputInformationOk.inputs ?"none":"block", color: 'red'}}>Por favor chequéa que la información sea correcta</p>
      {isInputInformationOk.submit &&<Card userName={userName} favouritePet={favouritePet}/>}
    </div>
  );
}

export default App;
