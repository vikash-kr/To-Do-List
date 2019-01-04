import React , { Component }from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from "./component/Header.js";
import MainComponent from "./component/MainComponent.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainComponent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

