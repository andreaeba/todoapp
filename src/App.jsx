import { useState } from "react";
import "./App.css";
import { InputNewTask  } from "./components/Input/InputNewTask";
import { Navbar } from "./components/Navbar/Navbar";
import { Tasks } from "./components/Tasks/Tasks";

function App() {

  return (
    <>
      
      <div className="App">  
      <Navbar/>
      <InputNewTask/>
        </div>
    </>
  );
}

export default App;
