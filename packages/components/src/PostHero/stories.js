import React from 'react'
import { storiesOf } from '@storybook/react'

import PostHero from './index'

const props = {
  media: {
    url: 'http://www.unsplash.it/600/300'
  },
  supertitle: 'Categoria',
  title: 'Titolo',
  subtitle: "Sottotitolo",
}

export default () =>
  storiesOf('PostHero', module)
    .add('Default', () => <PostHero {...props} />)
