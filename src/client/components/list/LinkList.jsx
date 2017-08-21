import React from 'react';
import { Grid } from 'material-ui';
import LinkItem from './LinkItem';

const style = {
  maxWidth: '700px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '20px',
};

const sortQualities = (linkInfo1, linkInfo2) => {
  const getQuality = (linkInfo) => {
    if (!linkInfo || !linkInfo.resolution) return -1;
    const index = linkInfo.resolution.indexOf('p');
    return index > 0 ? parseInt(linkInfo.resolution.substring(0, index), 0) : -1;
  };
  return getQuality(linkInfo1) < getQuality(linkInfo2) ? 1 : -1;
};

export default function LinkList({ linkInfoList }) {
  return (
    <div style={style}>
      <Grid container>
        {linkInfoList
          .sort(sortQualities)
          .map(linkInfo => <LinkItem key={linkInfo.itag} linkInfo={linkInfo} />)}
      </Grid>
    </div>
  );
}
