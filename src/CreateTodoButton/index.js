import React from "react";
import './CreateTodoButton.css'
import { TodoContext } from "../TodoContext";

function CreateTodoButton(props) {
    const {openModal, setOpenModal} = React.useContext(TodoContext);

    const onCLickButton = () => {
        props.setOpenModal(prevState => !prevState);
        //Uno puede enviar el estado y también funciones
        //El profe lo resuelve con un prevState 
        //setOpenModal(!openModal);
    };
    return(
        <button 
        className="CreateTodoButton"
        onClick={onCLickButton}
        >
            Agregar tarea
        </button>

    )
}

export {CreateTodoButton};