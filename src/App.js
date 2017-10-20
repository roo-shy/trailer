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

export default App;
