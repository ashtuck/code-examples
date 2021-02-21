import React from 'react';
import {storiesOf} from '@storybook/react-native';

// eslint-disable-next-line import/extensions
import Text from './Typography';
import CenterView from '../CenterView';

storiesOf('Typography', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Title', () => <Text.Title>This is Title Text</Text.Title>)
  .add('Body', () => <Text.Body>This is Body Text</Text.Body>);
