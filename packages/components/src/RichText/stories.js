import React from 'react'
import { storiesOf } from '@storybook/react';

import RichText from './index'

storiesOf('RichText', module)
  .add('with a text', () => (
    <RichText><h2>prfova</h2></RichText>
  ));