import React from 'react';
import { Grid, Paper } from 'material-ui';

const style = {
  paddingTop: '20px',
  paddingBottom: '20px',
};

export default function LinkItem({ linkInfo }) {
  return (
    <Grid item xs={4} sm={2}>
      <a href={linkInfo.url} download>
        <Paper style={style}>
          {linkInfo.container}
          <br />
          {linkInfo.resolution}
        </Paper>
      </a>
    </Grid>
  );
}
