import React from 'react';
import ReactDom from 'react-dom';
import './DisplayItems.css';
import Confetti from 'react-confetti';
import confetti from 'canvas-confetti';
import $, { nodeName } from "jquery";
import { getSuggestedQuery } from '@testing-library/react';

/*const canvasConfettiStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  numberOfPieces: 200,
}

const timer="";*/

const duration = 30 * 1000;
const end = Date.now() + duration;

class DisplayItems extends React.Component{
    constructor(props){
        super(props)
        this.state={
          color: 'white',
          textDecoration: 'none',
          toDo: this.props.entries,
          animationInstance: false,
          numberOfPieces: 100,
        }

        this.createTasks=this.createTasks.bind(this)
        this.delete=this.delete.bind(this)
        //this.makeShot=this.makeShot.bind(this)
        
    }

  /*makeShot = (particleRatio, opts) => {
    this.state.animationInstance = {
    
      particleCount: Math.floor(200 * particleRatio),
    };
  }*/
 

  createTasks(toDo) {
      return <li 
        key={toDo.key}
        onClick={()=> this.delete(toDo.key)}
        >
            
              {toDo.text}
            </li>         
}

g/*etInstance = (instance) => {
  this.state.animationInstance = instance;
}*/

  delete(key){
      console.log("Key is: " + key);
      this.props.delete(key);
      
      confetti({
        particleCount: 100,
        spread: 55,
      });
      if (Date.now() < end) {
        requestAnimationFrame();
      }
    /*  this.setState({
        animationInstance: this.getInstance()
      })*/
       //{alert("Great Job!")}
}

    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
  
        return(
          <div>
            <ul
                className="displayItems"
                style={this.state}
                >
                   {listItems}
            </ul> 
            
          </div>  
        )
    };
}


export default DisplayItems