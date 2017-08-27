import React from 'react';
import PropTypes from 'prop-types';
import LinkList from './LinkGrid';
import LinkItemProps from '../props/LinkItemProps';
import { isSupportingDownloadAttribute } from '../../../index';
import BrowserInfo from './BrowserInfo';

export default function MultiLinkList({ formats }) {
  const audioVideoFormats = formats.filter(info => info.resolution && info.audioBitrate);
  const videoFormats = formats.filter(info => info.resolution && !info.audioBitrate);
  const audioFormats = formats.filter(info => !info.resolution && info.audioBitrate);
  return (<div>
    {!isSupportingDownloadAttribute() && <BrowserInfo />}
    {audioVideoFormats && <LinkList
      header="Video & audio:"
      formats={audioVideoFormats}
    />}
    {videoFormats && <LinkList
      header="Video only:"
      formats={videoFormats}
    />}
    {audioFormats && <LinkList
      header="Audio only:"
      formats={audioFormats}
    />}
  </div>);
}

MultiLinkList.propTypes = {
  formats: PropTypes.arrayOf(LinkItemProps).isRequired,
};
