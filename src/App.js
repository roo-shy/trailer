import React from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';


 class App extends React.Component {
   
   handleClick = () => {
     console.log("pri");
   }
   
  render() {
    return (
      <MuiThemeProvider>
       <div className="App">
         <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h2>Welcome to React</h2>
         </div>
         <p className="App-intro">
           To get started, edit <code>src/App.js</code> and save to reload.
         </p>
         <RaisedButton label="Material UI" onClick={() => this.handleClick()} />
       </div>
       </MuiThemeProvider>
    );
  }
}

export default App;
