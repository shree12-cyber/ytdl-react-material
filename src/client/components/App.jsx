import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/createPalette';
import { deepPurple } from 'material-ui/colors';
import Main from './main/Main';

const theme = createMuiTheme({
  palette: createPalette({
    primary: deepPurple,
  }),
});

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Main />
    </MuiThemeProvider>
  );
}
