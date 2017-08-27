import React from 'react';
import { CircularProgress } from 'material-ui/Progress';
import { isSupportingLoader } from '../../index';

export default function Loader() {
  return isSupportingLoader() ?
    <CircularProgress size={50} /> :
    <p>Loading...</p>;
}
