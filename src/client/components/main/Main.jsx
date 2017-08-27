import React from 'react';
import { socket } from '../../index';
import Form from './form/DownloadForm';
import Loader from './Loader';
import TitleHeader from './TitleHeader';
import { SocketEvents } from '../../../constants';
import MultiLinkList from './list/CategorizedLinkList';

const containerStyle = {
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  textAlign: 'center',
};

const styleTop = {
  marginTop: 'auto',
};

const styleBottom = {
  marginBottom: 'auto',
};

export default class Main extends React.Component {
  constructor() {
    super();
    this.setUpState();
    this.setUpSocket();
    this.handleId = this.handleId.bind(this);
  }

  setUpState() {
    this.state = {
      isLoading: false,
      errorMessage: null,
      formats: null,
    };
  }

  setUpSocket() {
    socket.on(SocketEvents.INFO, (videoInfo) => {
      this.setState({
        isLoading: false,
        errorMessage: null,
        formats: videoInfo.formats,
      });
    });
  }

  handleId(id) {
    this.setState({
      isLoading: true,
    });
    socket.emit(SocketEvents.ID, id);
  }

  render() {
    return (
      <div style={containerStyle}>
        <div style={styleTop}>
          <TitleHeader />
        </div>
        <div style={styleBottom}>
          {this.state.isLoading ?
            <Loader /> :
            <div>
              <Form onIdSubmitted={this.handleId} errorMessage={this.state.errorMessage} />
              {this.state.formats && <MultiLinkList formats={this.state.formats} />}
            </div>
          }
        </div>
      </div>
    );
  }
}
