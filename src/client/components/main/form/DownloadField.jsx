import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from 'material-ui';
import PropTypes from 'prop-types';

const style = {
  maxWidth: '600px',
  width: '100%',
};

export default function DownloadField(props) {
  return (
    <FormControl style={style} error={!!props.errorMessage}>
      <InputLabel>YouTube URL to download</InputLabel>
      <Input onChange={event => props.onTextChanged(event.target.value)} />
      <FormHelperText>{props.errorMessage}</FormHelperText>
    </FormControl>
  );
}

DownloadField.propTypes = {
  onTextChanged: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

DownloadField.defaultProps = {
  errorMessage: null,
};
