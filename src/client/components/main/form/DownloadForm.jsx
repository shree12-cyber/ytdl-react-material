import React from 'react';
import PropTypes from 'prop-types';
import DownloadButton from './DownloadButton';
import DownloadField from './DownloadField';
import { UrlParts } from '../../../../constants';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
};

export default class Form extends React.Component {
  constructor(props) {
    super();
    this.state = {
      url: null,
      errorMessage: props.errorMessage,
    };
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const match = UrlParts.YOUTUBE_PATTERN_REGEX.exec(this.state.url);
    if (match) {
      this.props.onIdSubmitted(match[1]);
    } else {
      this.setState(previousState => ({
        url: previousState.url,
        errorMessage: 'Invalid URL',
      }));
    }
  }

  updateState(newUrl) {
    this.setState({
      url: newUrl,
      errorMessage: null,
    });
  }

  render() {
    return (
      <div style={style}>
        <DownloadField onTextChanged={this.updateState} errorMessage={this.state.errorMessage} />
        <DownloadButton callback={this.handleSubmit} />
      </div>
    );
  }
}

Form.propTypes = {
  onIdSubmitted: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

Form.defaultProps = {
  errorMessage: null,
};
