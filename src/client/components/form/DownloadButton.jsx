import React from 'react';
import { Button } from 'material-ui';
import PropTypes from 'prop-types';

const style = {
  fontSize: '20px',
  width: '300px',
  height: '60px',
};

export default function DownloadButton({ callback }) {
  return (
    <Button
      raised
      color="primary"
      style={style}
      onClick={() => callback()}
    >
      Download
    </Button>
  );
}

DownloadButton.propTypes = {
  callback: PropTypes.func.isRequired,
};
