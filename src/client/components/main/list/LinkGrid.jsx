import React from 'react';
import { Grid, Typography } from 'material-ui';
import PropTypes from 'prop-types';
import LinkItem from './LinkItem';
import LinkItemProps from '../props/LinkItemProps';

const getQuality = (linkInfo) => {
  if (!linkInfo || !linkInfo.resolution) return -1;
  const index = linkInfo.resolution.indexOf('p');
  return index > 0 ? parseInt(linkInfo.resolution.substring(0, index), 0) : -1;
};

const sortVideoList = (linkInfo1, linkInfo2) => {
  if (getQuality(linkInfo1) < getQuality(linkInfo2)) {
    return 1;
  } else if (getQuality(linkInfo1) > getQuality(linkInfo2)) {
    return -1;
  }
  return linkInfo1.audioBitrate < linkInfo2.audioBitrate ? 1 : -1;
};

const style = {
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '20px',
};

export default function LinkList({ formats, header }) {
  return (
    <div style={style}>
      <Typography type="title" gutterBottom>{header}</Typography>
      <Grid container>
        {formats
          .filter(linkInfo => linkInfo.container)
          .sort(sortVideoList)
          .map(linkInfo => <LinkItem key={linkInfo.itag} linkInfo={linkInfo} />)}
      </Grid>
    </div>
  );
}

LinkList.propTypes = {
  formats: PropTypes.arrayOf(LinkItemProps).isRequired,
  header: PropTypes.string.isRequired,
};
