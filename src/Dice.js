import React from 'react';
import './rooldie.css';
import './die.css'
class Dice extends React.Component{
constructor(props){
    super(props);
    this.state={

    }
}
    render(){
        return <div><i className={this.props.Rolling?`die fas fa-dice-${this.props.face} roll`:`die fas fa-dice-${this.props.face}`}></i></div>
    }
} 

export default Dice;