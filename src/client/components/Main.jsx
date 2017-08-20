import React from 'react';
import Form from './form/Form';
import Loader from './Loader';
import TitleHeader from './TitleHeader';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  flexDirection: 'column',
  textAlign: 'center',
};

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      errorMessage: null,
    };
    this.handleId = this.handleId.bind(this);
  }

  handleId(id) {
    console.log(id);
    this.setState({
      isLoading: true,
    });
  }

  render() {
    return (
      <div style={style}>
        <TitleHeader />
        {this.state.isLoading ?
          <Loader /> :
          <Form onIdSubmitted={this.handleId} errorMessage={this.state.errorMessage} />
        }
      </div>
    );
  }
}
