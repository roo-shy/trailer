import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import './App.css';

const App = () => (
  
    <MuiThemeProvider>
        
        <GridList>
          <GridTile
             actionPosition="left"
             titlePosition="top"
           >
           </GridTile>
         <h1>Hey</h1>
       </GridList>
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
