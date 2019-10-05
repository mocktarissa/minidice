import React from 'react';
import Dice from './Dice';
import './rooldie.css';
class Rolldice extends React.Component{
    constructor(props){
        super(props);
        this.state={
    
            current1:'one',
            current2:'one',
            rolling: false

        }
        this.randr=this.randr.bind(this)
    }
    randr(){
        let temp=['one','two',
        'three',
        'four',
        'five',
        'six'];
        
         this.setState({current1:temp[Math.floor(Math.random()*6)],current2:temp[Math.floor(Math.random()*6)],rolling:true});
        setTimeout(() => {
            this.setState({rolling:false})
        }, 1000);
    

    }
    getWinner(a,b){
        
    }
    render(){
        return(
            <div>
                <span >
                <Dice Rolling={this.state.rolling} face={this.state.current1} ></Dice>
                </span>
                <span >
                <Dice  Rolling={this.state.rolling} face={this.state.current2}></Dice>
                </span>
                
                <button onClick={this.randr} disabled={this.state.rolling}>
                 {this.state.rolling ?'Rolling....':'Roll dice!!!'} 
                </button>
            </div>
        )
    }
}
export default Rolldice;