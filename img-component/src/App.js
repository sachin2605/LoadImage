import React, { Component } from 'react';
import logo from './circles.svg';
import LoadImage from './components/imgLoad';
import './App.css';
const inline = "<div>Hello</div>";
const hdUrl = 'https://images.unsplash.com/photo-1440558547120-1c1cae0397a1?ixlib=rb-0.3.5&s=39d0555e73bf7d7b1b5223fd168883db&auto=format&fit=crop&w=1350&q=80';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Next Generation Image Loading  </h1>
        </header>
       
     <LoadImage
     width="200px"
     placeholder={inline} 
    src={hdUrl}
    alt="Random image"
    />
      </div>
    );
  }
}

export default App;
