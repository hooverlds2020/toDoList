import React from "react";

//Estilos
import "../styles/Header.css";

const Header = ({handleFilter}) => {
  return (
    <header >
      <h4 className="logo">ToDo List</h4>
      <div className="btn">
        <button onClick={()=>handleFilter("all")}>All</button>
        <button onClick={()=>handleFilter("completed")}>Completas</button>
        <button onClick={()=>handleFilter("reset")}>Incompletas</button>
      </div>
    </header>
  );
};

export default Header;