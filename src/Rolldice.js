import React from 'react';
import Dice from './Dice';

class Rolldice extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
                <Dice></Dice>
                <Dice></Dice>
            </div>
        )
    }
}
export default Rolldice;