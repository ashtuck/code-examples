import { Dimensions, Platform, StatusBar } from 'react-native';
// import {ifIphoneX, isIphoneX} from 'react-native-iphone-x-helper';

const { width, height } = Dimensions.get('window');
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const tabletThreshold = 420;
const smallScreenThreshold = 320;

const resizeFont = (size: number) => {
  if (width <= 320) {
    return parseInt((size / 100) * 80, 10);
  }
  return size;
};

const baseMargin = 8;

const metrics = {
  baseMargin,
  doubleMargin: baseMargin * 2,
  halfMargin: baseMargin / 2,
  quarterMargin: baseMargin / 4,
  appWidth: width > tabletThreshold ? tabletThreshold : screenWidth,
  isTablet: width > tabletThreshold,
  isMobile: width < tabletThreshold,
  isSmallScreen: width <= smallScreenThreshold,
  buttonHeight: 50,
  buttonBorderRadius: 250,
  mainNavBarHeight: 36,
  mainTabBarHeight: 50,
  borderRadius: baseMargin * 2,
  modal: {
    width: '90%',
    minWidth: 200,
    maxWidth: 420,
  },
  input: {
    labelPadding: baseMargin,
    inputPadding: baseMargin / 2,
  },
  screenWidth,
  screenHeight,
  statusBarHeight,
  resizeFont,
};

export default metrics;
