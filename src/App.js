import React from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';
import AddTodo from './containers/AddTodo'
import TodoList from './containers/TodoList'

const App = () => (
  
    <MuiThemeProvider>
      <div>
        <h1>Hey</h1>
    {/* <AddTodo />
    <TodoList /> */}
    </div>
  </MuiThemeProvider>
  
)
//  class App extends React.Component {
//    
//    handleClick = () => {
//      console.log("pri");
//    }
//    
//   render() {
//     return (
//       <MuiThemeProvider>
//        <div className="App">
//          <div className="App-header">
//            <img src={logo} className="App-logo" alt="logo" />
//          </div>
//          <Paper zDepth={2}>
//           <TextField hintText="Add todo" underlineShow={false} />
//           <Divider />
//         </Paper>
//          <p className="App-intro"></p>
//          <RaisedButton label="Material UI" onClick={() => this.handleClick()} />
//        </div>
//        </MuiThemeProvider>
//     );
//   }
// }

export default App;
