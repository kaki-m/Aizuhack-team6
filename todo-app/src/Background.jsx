import Background6 from './images/background-img6.png';
import Background1 from './images/background-img1.png';
import Background2 from './images/background-img2.png';
import Background3 from './images/background-img3.png';
import Background4 from './images/background-img4.png';
import Background5 from './images/background-img5.png';
import Background7 from './images/background-img7.png';
import Background8 from './images/background-img8.png';
import Background9 from './images/background-img9.png';
import Background10 from './images/background-img10.png';
import Background11 from './images/background-img11.png';
import Background12 from './images/background-img12.png';

import React from 'react';
import './Today.css';

export default class Background extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            background_src:Background1,
            debug_num:0,

        }
    }

    handleChangeImg(x){
        const img_set = [Background1,Background2,Background3,Background4,Background5,Background6,Background7,Background8,Background9,Background10,Background11,Background12];
        const new_src = img_set[x-1];
        this.setState({
            background_src:new_src,
            debug_num:x,

        });
        
    }
    

  render(){
      const image_src = this.state.background_src;
      const num = this.state.debug_num;     
    return (
        <React.Fragment>
            <p className = "debug">{num}</p>
            <li className = "button">
                <div className = "button1">
                <button id = "1" onClick = {() =>{this.handleChangeImg(1)}} >1</button>
                </div>
                <div className = "button2">
                <button id = "2" onClick = {() =>{this.handleChangeImg(2)}} >2</button>
                </div>
                <div className = "button3">
                <button id = "3" onClick = {() =>{this.handleChangeImg(3)}} >3</button>
                </div>
                <div className = "button4">
                <button id = "4" onClick = {() =>{this.handleChangeImg(4)}} >4</button>
                </div>
                <div className = "button5">
                <button id = "5" onClick = {() =>{this.handleChangeImg(5)}} >5</button>
                </div>
                <div className = "button6">
                <button id = "6" onClick = {() =>{this.handleChangeImg(6)}} >6</button>
                </div>
                <div className = "button7">
                <button id = "7" onClick = {() =>{this.handleChangeImg(7)} }>7</button>
                </div>
                <div className = "button8">
                <button id = "8" onClick = {() =>{this.handleChangeImg(8)} }>8</button>
                </div>
                <div className = "button9">
                <button id = "9" onClick = {() =>{this.handleChangeImg(9)}} >9</button>
                </div>
                <div className = "button10">
                <button id = "10" onClick = {() =>{this.handleChangeImg(10)}} >10</button>
                </div>
                <div className = "button11">
                <button id = "11" onClick = {() =>{this.handleChangeImg(11)}} >11</button>
                </div>
                <div className = "button12">
                <button id = "12" onClick = {() =>{this.handleChangeImg(12)}} >12</button>
                </div>
            </li>
            <div className = "background-div">
                <img src = {image_src} className = "background"/>
            </div>
            <p></p>

        </React.Fragment>
    );
    }
}