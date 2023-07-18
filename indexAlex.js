import React from "react";
import { AppUi } from "./App/AppUi";
//import { TodoCarrousel } from "./TodoCarrousel";

//Estos eran los de ejemplo
  const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Hacer ejercicio", completed: false },
  { text: "Leer Libro", completed: false },
  { text: "Dedicar 15 min al curso de React", completed: true },
];

function App() {
  //Para crear los todos con persistencia
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  //Si no hay nada en localstorage, osea nuevos
  if (!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  //se crea un nuevo estado para los todos
  const [todos, setTodos] = React.useState(parsedTodos);
  console.log("parse dentro del React.useState: ",parsedTodos)
  const [searchValue, setSearchValue] = React.useState('');

  //Se crea el contador, se usa filter. Se puede colcoar todo.completed o !!todo.completed
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  //Se crea la lógica del buscardor
  //Se crea un array vacío searchedTodos
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      //se filtran la cantidad de los todos que cumplan
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      //Ahora se requiere comparar o filtrar si cada todo incluye algo del imput que recibimos
      return todoText.includes(searchText); // este es el criterio de evaluación
    });
  }

  //Se crea la función para marcar todos completados
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos); // Va a hacer un re-render
    //Esta es una forma de acceder a la propiedad
/*     todos[todoIndex] = {
      text: todos[todoIndex].completed = true,
      completed: true
    }; */
  }

  //Para eliminar los Todos
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);//Busca lo que se quiere sacar, la cantidad que se desea sacar
    saveTodos(newTodos);// Va a hacer un re-render
    //Esta es una forma de acceder a la propiedad
/*     todos[todoIndex] = {
      text: todos[todoIndex].completed = true,
      completed: true
    }; */
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1',stringifiedTodos);
    setTodos(newTodos);
  };

  return (
    <AppUi

      totalTodos = {totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos ={searchedTodos}  
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    
    />
  );
}

export default App;