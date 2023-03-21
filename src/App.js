import React from "react";
import axios from 'axios';


import './App.css';



class App extends React.Component{
    state = {Advice : ''};

    componentDidMount(){
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
                 .then((response) => {
                    const { advice } = response.data.slip;
                    this.setState({ Advice : advice });
                 })
                 .catch((error) => {
                    console.log(error);
                 })
    }

    render(){

        const {Advice} = this.state;
        return(
            
            <div className="app">
                <div className="window">

                <h1 className="advice">{Advice}</h1>
                <button className="button" onClick={this.fetchAdvice
                }>
                    <span>GIVE ME ADVICE!</span>
                </button>

                </div>
            </div>
        );
    }
}

export default App;