import React from 'react';
import { render } from 'react-dom';
import io from 'socket.io-client';
import App from './components/App';

export default io();

window.onload = () => {
  render(<App />, document.getElementById('root'));
};
