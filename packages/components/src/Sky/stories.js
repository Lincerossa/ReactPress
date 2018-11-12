import React from 'react'
import { storiesOf } from '@storybook/react';

import Sky from './index'

storiesOf('Sky', module)
  .add('with a text', () => (
    <Sky />
  ));