import React from "react";
import './TodoSearch.css'
import { TodoContext } from "../TodoContext";

function TodoSearch () {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    //Para crear un estado se usa el método React.UseState
    //El estado devuelve un array de 2 posiciones
    // el primero es lo que definimos y la segunda es setState, la que permite cambiar el estado
    //const [searchValue, setSearchValue] = React.useState('');

    //Esta función me permite ver la información que el usuario está buscando
    //Para tener la información del valor o el string se mira dentro de las propiedades que tiene el evento
    //Y con eso se coloca el target.value
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input 
            placeholder="Leer" 
            className="TodoSearch"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export {TodoSearch};