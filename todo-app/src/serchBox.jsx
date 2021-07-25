import './serchBox.css';
import React from 'react';


export default class serchBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            google_serch_url:'',

        }
    }

    handleKeyDown(e){
        if(e.keyCode == 13){
            //ここでエンターが押された時の処理をかく
            this.setState({
                google_serch_url:e.target.value,

            });
            const next_url = "https://www.google.com/search?q=" + this.state.google_serch_url;
            //URLを実際リダイレクトする
                window.history.pushState(null, null, next_url);
            
        }
    }
    
  render(){
      const {sayHello} = this.state;
      const {contactMe} = this.state;
    return (
        <React.Fragment>
            <div className="input_div">
                <input
                className="input_box" 
                placeholder="Google で検索または URL を入力" 

                onKeyDown = {(e) => this.handleKeyDown(e)}
            
                />

            </div>
    </React.Fragment>
    );
    }
}