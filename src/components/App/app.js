import "./app.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import List from "../List/list";
import ListItem from "../List-item/list-item";
const App = () => {
  let [todos, setTodos] = React.useState([
    {
      id: 1,
      text: "code yozish",
      isComplate: false,
    },
    {
      id: 2,
      text: "Kitob oqish",
      isComplate:true,
    },
    {
      id: 1,
      text: "Kino korish",
      isComplate: false,
    },
  ]);
  let [value,setValue]=React.useState(0)
  let [number,setNumber]=React.useState([1,2,3,4,5])
  function handleSubmit(e){
    e.preventDefault()
    setNumber([...number,value])
  }
  return <div className="div container">
    <form onSubmit={handleSubmit} >
      <input type="text" onInput={e=>
          setValue(e.target.value)
      }/>
      <button type="submit">Add</button>
    </form>
   <List>
      {
        todos.map(item=>(
          <ListItem  isComplate={item.isComplate} text={item.text}/>
        ))
      }
   </List>
   <h1>{number}</h1>
  </div>;
};

export default App;
