import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
import ToDoList from './ToDoList.js'
import $ from "jquery"

class App extends React.Component {
  constructor(){
    super()
    this.state={

    }
    
  }

  render(){
      return (
    <div className="App">
      <header className="App-header">
        <h1>Motivational To-Do List</h1>
      </header>
      <div className="toDo">
      <h3 className="toDoHeader">To Do</h3>
      <div className="addPlacement">
        <ToDoList />
      </div>
      </div>
    </div>
  );
      }
}


export default App;