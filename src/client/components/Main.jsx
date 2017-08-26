import React from 'react';
import socket from '../index';
import Form from './form/Form';
import Loader from './Loader';
import TitleHeader from './TitleHeader';
import { SocketEvents } from '../../constants';
import LinkList from './list/LinkList';

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
    this.state = {
      isLoading: false,
      errorMessage: null,
      audioVideoInfoList: null,
      videoInfoList: null,
      audioInfoList: null,
    };
    this.handleId = this.handleId.bind(this);
    socket.on(SocketEvents.INFO, (videoInfo) => {
      this.setState({
        isLoading: false,
        errorMessage: null,
        audioVideoInfoList: videoInfo.formats.filter(info => info.resolution && info.audioBitrate),
        videoInfoList: videoInfo.formats.filter(info => info.resolution && !info.audioBitrate),
        audioInfoList: videoInfo.formats.filter(info => !info.resolution && info.audioBitrate),
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
              {this.state.audioVideoInfoList && <LinkList
                listHeader="Video & audio:"
                linkInfoList={this.state.audioVideoInfoList}
              />}
              {this.state.videoInfoList && <LinkList
                listHeader="Video only:"
                linkInfoList={this.state.videoInfoList}
              />}
              {this.state.audioInfoList && <LinkList
                listHeader="Audio only:"
                linkInfoList={this.state.audioInfoList}
              />}
            </div>
          }
        </div>
      </div>
    );
  }
}
