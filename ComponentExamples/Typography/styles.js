import { StyleSheet, Platform } from 'react-native';
import {
  iOSUIKit,
  sanFranciscoWeights,
  sanFranciscoSpacing,
  material,
} from 'react-native-typography';
import { Colors, Metrics } from '../../themes';

const styles = {
  container: {},
  settingsTitleText: Platform.select({
    ios: {
      ...iOSUIKit.bodyEmphasized,
      color: Colors.typography.settingsTitleText,
      fontSize: 22,
    },

    android: {
      ...material.bodyEmphasized,
      color: Colors.typography.settingsTitleText,
      fontSize: 22,
    },
  }),

  settingsTitleTextEmphasized: Platform.select({
    ios: {
      ...iOSUIKit.bodyEmphasized,
      color: Colors.typography.settingsTitleTextEmphasized,
      fontSize: 22,
      fontFamily: 'SFProRounded-Regular',
    },
    android: {
      ...material.bodyEmphasized,
      color: Colors.typography.settingsTitleTextEmphasized,
      fontSize: 22,
    },
  }),

  titleText: Platform.select({
    ios: {
      ...iOSUIKit.bodyEmphasized,
      color: Colors.typography.titleText,
    },
    android: {
      ...material.bodyEmphasized,
      color: Colors.typography.titleText,
    },
  }),

  largeTitleText: Platform.select({
    ios: {
      ...iOSUIKit.title3,
      ...sanFranciscoWeights.semibold,
      color: Colors.typography.largeTitleText,
    },
    android: {
      ...material.title3,
      ...material.semibold,
      color: Colors.typography.largeTitleText,
    },
  }),

  subheadEmphasizedText: Platform.select({
    ios: {
      ...iOSUIKit.subheadEmphasized,
      color: Colors.typography.subheadEmphasizedText,
    },
    android: {
      ...material.subheadEmphasized,
      color: Colors.typography.subheadEmphasizedText,
    },
  }),

  subheadText: Platform.select({
    ios: {
      ...iOSUIKit.subhead,
      ...sanFranciscoWeights.medium,
      color: Colors.typography.subheadText,
    },
    android: {
      ...material.subhead,
      ...material.medium,
      color: Colors.typography.subheadText,
    },
  }),

  bodyEmphasizedText: Platform.select({
    ios: {
      ...iOSUIKit.bodyEmphasized,
      ...sanFranciscoWeights.bold,
      color: Colors.typography.bodyEmphasizedText,
    },
    android: {
      ...material.bodyEmphasized,
      ...material.bold,
      color: Colors.typography.bodyEmphasizedText,
    },
  }),

  bodyText: Platform.select({
    ios: {
      ...iOSUIKit.body,
      color: Colors.typography.bodyText,
    },
    android: {
      ...material.body,
      color: Colors.typography.bodyText,
    },
  }),

  statementText: Platform.select({
    ios: { ...iOSUIKit.body, color: Colors.typography.statementText },
    android: { ...material.body, color: Colors.typography.statementText },
  }),

  statementHighlightText: Platform.select({
    ios: {
      ...iOSUIKit.body,
      ...sanFranciscoWeights.medium,
      color: Colors.typography.statementHighlightText,
    },
    android: {
      ...material.body,
      ...material.medium,
      color: Colors.typography.statementHighlightText,
    },
  }),

  buttonLabelText: Platform.select({
    ios: {
      ...iOSUIKit.bodyEmphasized,
      ...sanFranciscoWeights.bold,
      color: Colors.button.labelPrimaryText,
    },
    android: {
      ...material.bodyEmphasized,
      ...material.bold,
      color: Colors.button.labelPrimaryText,
    },
  }),

  rockerSwitchInputValueText: Platform.select({
    ios: {
      ...iOSUIKit.title3Emphasized,
      color: Colors.rockerSwitchInput.valueText,
      fontFamily: 'SFProRounded-Regular',
    },
    android: {
      ...material.title3Emphasized,
      color: Colors.rockerSwitchInput.valueText,
    },
  }),

  footnoteText: Platform.select({
    ios: {
      ...iOSUIKit.footnote,
      color: Colors.typography.footnoteText,
    },
    android: {
      ...material.footnote,
      color: Colors.typography.footnoteText,
    },
  }),

  footnoteEmphasizedText: Platform.select({
    ios: {
      ...iOSUIKit.footnoteEmphasized,
      color: Colors.typography.footnoteText,
    },
    android: {
      ...material.footnoteEmphasized,
      color: Colors.typography.footnoteText,
    },
  }),

  labelText: Platform.select({
    ios: {
      ...iOSUIKit.footnote,
      color: Colors.typography.labelText,
    },
    android: {
      ...material.footnote,
      color: Colors.typography.labelText,
    },
  }),

  valueText: Platform.select({
    ios: { ...iOSUIKit.title3Emphasized, color: Colors.typography.valueText },
    android: {
      ...material.title3Emphasized,
      color: Colors.typography.valueText,
    },
  }),

  bigAmountText: Platform.select({
    ios: {
      ...iOSUIKit.largeBodyEmphasized,
      ...sanFranciscoWeights.semibold,
      fontSize: 66,
      letterSpacing: sanFranciscoSpacing(66),
      color: Colors.typography.bigAmountText,
      fontFamily: 'SFProRounded-Regular',
    },
    android: {
      ...material.largeBodyEmphasized,
      ...material.semibold,
      fontSize: 66,
      letterSpacing: sanFranciscoSpacing(66),
      color: Colors.typography.bigAmountText,
    },
  }),

  bigAmountCurrencyText: Platform.select({
    ios: {
      ...iOSUIKit.largeBodyEmphasized,
      ...sanFranciscoWeights.semibold,
      fontSize: 34,
      letterSpacing: sanFranciscoSpacing(66),
      fontFamily: 'SFProRounded-Regular',
    },
    android: {
      ...material.largeBodyEmphasized,
      ...material.semibold,
      fontSize: 34,
      letterSpacing: sanFranciscoSpacing(66),
    },
  }),
};

export default StyleSheet.create(styles);
