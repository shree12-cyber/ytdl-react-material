import React from 'react';
import { Grid, Paper } from 'material-ui';
import LinkItemProps from '../props/LinkItemProps';

const style = {
  paddingTop: '20px',
  paddingBottom: '20px',
};

export default function LinkItem({ linkInfo }) {
  return (
    <Grid item xs={4} sm={2}>
      <a href={linkInfo.url} download>
        <Paper style={style}>
          {linkInfo.container || 'N\\A'}
          <br />
          {linkInfo.resolution || ((linkInfo.audioBitrate) ? `${linkInfo.audioBitrate}bps` : 'N\\A')}
        </Paper>
      </a>
    </Grid>
  );
}

LinkItem.propTypes = LinkItemProps;
