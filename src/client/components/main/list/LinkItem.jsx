/* eslint-disable no-alert */
import React from 'react';
import { Grid, Paper } from 'material-ui';
import FileDownload from 'material-ui-icons/FileDownload';
import LinkItemProps from '../props/LinkItemProps';
import { isSupportingDownloadAttribute } from '../../../index';

const paperStyle = {
  paddingTop: '12px',
  paddingBottom: '12px',
};
const linkStyle = {
  color: 'black',
  textDecoration: 'none',
};

export default function LinkItem({ linkInfo }) {
  const resolutionText = <span><br />{linkInfo.resolution}</span>;
  const bitrateText = <span><br />{linkInfo.audioBitrate}bps</span>;
  const onClick = (event) => {
    if (isSupportingDownloadAttribute()) {
      return true;
    }
    event.preventDefault();
    window.alert('To download a video right click on a format and choose "save element as"');
    return false;
  };
  return (
    <Grid item xs={4} sm={2}>
      <a style={linkStyle} href={linkInfo.url} download onClick={onClick}>
        <Paper style={paperStyle}>
          {linkInfo.container}
          {linkInfo.resolution && resolutionText}
          {linkInfo.audioBitrate && bitrateText}
          <br />
          <FileDownload />
        </Paper>
      </a>
    </Grid>
  );
}

LinkItem.propTypes = LinkItemProps;
