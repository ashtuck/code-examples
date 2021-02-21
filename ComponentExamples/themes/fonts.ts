// Fonts
import Metrics from './metrics';

const type = {
  regular: 'Muli-Regular',
  semiBold: 'Muli-SemiBold',
  bold: 'Muli-Bold',
  extraBold: 'Muli-ExtraBold',
};

const size = {
  xxxlarge: Metrics.resizeFont(48),
  xxlarge: Metrics.resizeFont(28),
  xlarge: Metrics.resizeFont(24),
  large: Metrics.resizeFont(19),
  regular: Metrics.resizeFont(17),
  small: Metrics.resizeFont(13),
  xsmall: Metrics.resizeFont(8.5),
  xxsmall: Metrics.resizeFont(8.5),
  xxxsmall: Metrics.resizeFont(8.5),
};

export default {
  type,
  size,
};
