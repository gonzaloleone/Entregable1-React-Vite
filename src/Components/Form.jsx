import { useState } from "react";
import Card from "./Card";
import Error from "./Error";

const Form = () => {
    const [usuario, setUsuario] = useState({
        nombre: "",
        animalPreferido: "",
    });

const [show, setShow] = useState(false);
const [error, setError] = useState(false);

const handleSubmit = (event) => {
    event.preventDefault();
    const espaciosAlComienzo = /^\s/;
    if (!espaciosAlComienzo.test(usuario.nombre) && usuario.nombre.length > 3 && usuario.animalPreferido.length > 6) {
        setShow(true);
        setError(false);
    } else {
        setError(true)
        setShow(false);
    }
};


  return (
    <div>
        <form onSubmit={handleSubmit}>

            <label>Nombre:</label>
            <input type="text"
            value={usuario.nombre} 
            onChange={(event) => setUsuario({...usuario, nombre: event.target.value})}/>

            <label>Animal preferido:</label>
            <input type="text" 
            value={usuario.animalPreferido} 
            onChange={(event) => setUsuario({...usuario, animalPreferido: event.target.value})}/>

            <button>Enviar</button>

        </form>
        {show ? <Card usuario={usuario} /> : null}
        {error && <Error/>}
    </div>
  )
}

export default Form