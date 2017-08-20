import React from 'react';
import socket from '../index';
import Form from './form/Form';
import Loader from './Loader';
import TitleHeader from './TitleHeader';
import { SocketEvents } from '../../constants';
import LinkList from './list/LinkList';

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
      linkInfoList: null,
    };
    this.handleId = this.handleId.bind(this);
    socket.on(SocketEvents.INFO, (videoInfo) => {
      console.log(videoInfo.linkInfoList);
      this.setState({
        isLoading: false,
        errorMessage: null,
        linkInfoList: videoInfo.formats,
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
      <div style={style}>
        <TitleHeader />
        {this.state.isLoading ?
          <Loader /> :
          <div>
            <Form onIdSubmitted={this.handleId} errorMessage={this.state.errorMessage} />
            {this.state.linkInfoList ? <LinkList linkInfoList={this.state.linkInfoList} /> : null}
          </div>
        }
      </div>
    );
  }
}
