import React from 'react';
import { render } from 'react-dom';
import io from 'socket.io-client';
import App from './components/App';

export const socket = io();

export function isSupportingDownloadAttribute() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}

export function isSupportingLoader() {
  return window.navigator.userAgent.indexOf('Chrome') > -1;
}

window.onload = () => {
  render(<App />, document.getElementById('root'));
};
