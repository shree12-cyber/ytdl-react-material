import PropTypes from 'prop-types';

export default PropTypes.shape({
  url: PropTypes.string.isRequired,
  container: PropTypes.string,
  resolution: PropTypes.string,
  audioBitrate: PropTypes.number,
}).isRequired;
