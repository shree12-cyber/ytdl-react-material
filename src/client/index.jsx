import React from 'react';
import { render } from 'react-dom';
import io from 'socket.io-client';
import App from './components/App';

export const socket = io();

export function supportsDownloadAttribute() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}

window.onload = () => {
  render(<App />, document.getElementById('root'));
};
