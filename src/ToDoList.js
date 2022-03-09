import React from 'react';
import ReactDom from 'react-dom';
import './ToDoList.css'
import $ from "jquery"
import DisplayItems from './DisplayItems.js';
import Confetti from 'react-confetti'


const List = [

];

const canvasConfettiStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
}


class ToDoList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            toDo: [],
            color:"white",
            textDecoration: "none",
            animationInstance: false,
        };

        this.handleAdd=this.handleAdd.bind(this);
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        this.getInstance=this.getInstance.bind(this);
        }

    handleAdd(){
        $("#add").show()
        $("#submit").show()
      }

    addItem(e){
        if(this._inputElement.value !== "") {
            var newToDo = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
               return {
                   toDo:prevState.toDo.concat(newToDo)
               }
            });      
            this._inputElement.value = ""; 
            console.log(this.state.toDo)   
            e.preventDefault()  
        }
        $("#add").hide()
        $("#submit").hide()
    }

 

        deleteItem(key) {
            var filteredToDo = this.state.toDo.filter(function (item) {
              return (item.key !== key);
            });
           
            this.setState({
              toDo: filteredToDo
            });
          }

        getInstance = (instance) => {
            this.state.animationInstance = instance;
          }

    render(){
        
        return(
            <div 
            className="addArea">
              <form>
               <input 
                 className="addButton" 
                 type="button" 
                 value="Add +" 
                 onClick={this.handleAdd} 
               />
               <input 
               ref={(a) => this._inputElement = a}
                 type="text" 
                 id = "add" 
                 placeholder="What do you need to do?" 
                 hidden
               />
               <button
               type="submit"
               id="submit"
               onClick={this.addItem}
               hidden
               >+
               </button>
               <Confetti refConfetti={this.getInstance} style = {canvasConfettiStyles} recycle={this.state.animationInstance} numberOfPieces={100} />
            </form> 
               <br />
               <div 
               className="display"
               >   
                <DisplayItems entries={this.state.toDo}
                    key={this.state.toDo.key}
                    style={this.state}
                    delete={this.deleteItem}/>
               </div>
               
           </div>
        )
    }
}

export default ToDoList