import React from 'react';
import PropTypes from 'prop-types';
import {View, SafeAreaView} from 'react-native';
import style from './style';

export default function CenterView({children, backgroundColor, extraStyle}) {
  return (
    <View
      style={[
        style.main,
        backgroundColor && {backgroundColor: backgroundColor},
        extraStyle,
      ]}>
      {children}
    </View>
  );
}

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};
