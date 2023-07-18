import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";
// en las props se coloca la información. Pero como las propiedades que necesita son total y completed se coloca de esa forma
function TodoCounter() {
    const{totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter"> Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export {TodoCounter};