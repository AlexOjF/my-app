import React from "react";
import { AppUi } from "./AppUi";
import { TodoProvider } from "../TodoContext";

//Este es un React Hook
//Se va a abstraer el manejo de localStorage

function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
