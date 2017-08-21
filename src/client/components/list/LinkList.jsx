import React from 'react';
import { Grid } from 'material-ui';
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
  maxWidth: '700px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '20px',
};

export default function LinkList({ linkInfoList }) {
  return (
    <div style={style}>
      <Grid container>
        {linkInfoList
          .filter(linkInfo => linkInfo.container)
          .sort(sortVideoList)
          .map(linkInfo => <LinkItem key={linkInfo.itag} linkInfo={linkInfo} />)}
      </Grid>
    </div>
  );
}

LinkList.propTypes = {
  linkInfoList: PropTypes.arrayOf(LinkItemProps).isRequired,
};
