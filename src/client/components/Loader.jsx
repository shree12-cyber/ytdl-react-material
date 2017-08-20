import React from 'react';
import { CircularProgress } from 'material-ui/Progress';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      message: null,
    };
  }

  render() {
    return (
      <div>
        <CircularProgress size={50} />
      </div>
    );
  }
}
