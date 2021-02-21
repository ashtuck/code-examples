import React from 'react';
import {
  TouchableHighlight,
  Image,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from 'react-native';
import styles from './styles';
import Text from '../Typography';
import { Colors } from '../themes';

type ButtonTypes = 'primary' | 'secondary' | 'warning';

interface Props {
  label?: string;
  onPress?: () => void;
  type?: ButtonTypes;
  iconImageSource?: any;
  testID?: string;
  loading?: boolean;
}

const Button: React.FC<Props> = ({
  label = 'Tap Here',
  onPress,
  type = 'primary',
  iconImageSource,
  testID,
  loading = false,
}) => {
  let underlayColor;

  switch (type) {
    case 'secondary':
      underlayColor = Colors.button.backgroundSecondaryUnderlay;
      break;

    case 'warning':
      underlayColor = Colors.button.backgroundWarningUnderlay;
      break;

    default:
      underlayColor = Colors.button.backgroundPrimaryUnderlay;
      break;
  }

  return (
    <TouchableHighlight
      underlayColor={underlayColor}
      style={StyleSheet.flatten([
        styles.container,
        type === 'secondary' && {
          backgroundColor: Colors.button.backgroundSecondary,
        },
        type === 'warning' && {
          backgroundColor: Colors.button.backgroundWarning,
        },
      ])}
      onPress={loading ? console.log('pressed') : onPress}
      testID={testID}
    >
      <>
        <Text.ButtonLabel
          color={
            type === 'secondary'
              ? Colors.button.labelSecondaryText
              : Colors.button.labelPrimaryText
          }
        >
          {Platform.OS === 'ios' ? (
            loading ? (
              <ActivityIndicator />
            ) : (
              label
            )
          ) : loading ? (
            'loading'
          ) : (
            label
          )}
        </Text.ButtonLabel>
        {iconImageSource && <Image source={iconImageSource} />}
      </>
    </TouchableHighlight>
  );
};

export default Button;
