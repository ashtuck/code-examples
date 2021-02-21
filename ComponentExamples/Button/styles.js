import { StyleSheet } from 'react-native';
import { Colors, Metrics } from './themes';

const styles = {
  container: {
    borderRadius: Metrics.buttonBorderRadius,
    height: Metrics.buttonHeight,
    backgroundColor: Colors.button.backgroundPrimary,
    paddingHorizontal: Metrics.doubleMargin + Metrics.baseMargin,
    paddingVertical: Metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
};

export default StyleSheet.create(styles);
