import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import './App.css';
import {
  red500, grey400, grey500, grey600, grey700,
  transparent, lightWhite, white, darkWhite, lightBlack, black,
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    backgroundColor: grey400,
  },
  appBar: {
    height: 50,
  },
});

const App = () => (
  
    <MuiThemeProvider muiTheme={muiTheme}>
        <GridList>
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <GridTile
             titlePosition="top"
           >
           </GridTile>
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
