import React from 'react';

class Dice extends React.Component{
constructor(props){
    super(props);
    this.state={

    }
}
    render(){
        return <div><i className={`fas fa-dice-${this.props.face}`}></i></div>
    }
} 

export default Dice;