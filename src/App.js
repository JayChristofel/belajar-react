import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Composition

class App extends Component {
  render(){
    return (
      <table>
        <tr>
          <Column/>
        </tr>
      </table>
    );
  }
}

class Column extends React.Component {
  render() {
    return(
      <React.Fragment> 
        <td>Data Satu</td>
        <td>Data Berikutnya</td>
      </React.Fragment>
    );
  }
}

export default App;
