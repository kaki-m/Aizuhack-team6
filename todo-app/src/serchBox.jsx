import './serchBox.scss';
import React from 'react';


export default class serchBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sayHello:null,
            contactMe:null,
        }
    }

    handleKeyDown(e){
        if(e.keyCode == 13){
            //ここでエンターが押された時の処理をかく
        }
    }
    
  render(){
      const {sayHello} = this.state;
      const {contactMe} = this.state;
    return (
        <React.Fragment>
            <div >
                <input 
                className = "input_box" 
                placeholder="Google で検索または URL を入力" 

                onKeyDown = {(e) => this.handleKeyDown(e)}
            
                />

            </div>
    </React.Fragment>
    );
    }
}