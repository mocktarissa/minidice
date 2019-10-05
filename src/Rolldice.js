import React from 'react';
import Dice from './Dice';

class Rolldice extends React.Component{
    constructor(props){
        super(props);
        this.state={
    
            current1:'one',
            current2:'one'
            
        }
        this.randr=this.randr.bind(this)
    }
    randr(){
        let temp=['one','two',
        'three',
        'four',
        'five',
        'six'];
        
        this.setState({current1:temp[Math.floor(Math.random()*6)]})
        this.setState({current2:temp[Math.floor(Math.random()*6)]})
    }
    render(){
        return(
            <div>
                <Dice face={this.state.current1}></Dice>
                <Dice face={this.state.current2}></Dice>
                <button onClick={this.randr}>Randomize</button>
            </div>
        )
    }
}
export default Rolldice;