import React from 'react';
import './Today.css';

export default class serchBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date:new Date(),

        }
    }

    componentDidMount(){
        this.timerID = setInterval(
            ()=> this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date:new Date()
        });
    }
  
  render(){
      let now = new Date();
      const today = "2021年" + (now.getMonth()+1) + "月" + now.getDate() + "日";
      
    return (
        <React.Fragment>
            <div className = "date">
                <h1 className = "today">{today}</h1>
                <h2 className = "now">{this.state.date.toLocaleTimeString()}</h2>
            </div>
        </React.Fragment>
    );
    }
}