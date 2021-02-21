import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Button from './Button';
import CenterView from '../CenterView';
import { Alert } from 'react-native';

const label = 'Tap this button';
const onPress = () => Alert.alert('Button Pressed');

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Button', () => <Button label={label} onPress={onPress} />);
