import React from 'react'
import { storiesOf } from '@storybook/react'

import List from './index'
import Card from '../Card'

const props = {
  media: {
    url: "http://www.unsplash.it/400/500",
    title: "titolo dell'immagine",
    alt: "titolo dell'immagine"
  },
  supertitle: "Post",
  title: "titolo della card",
  subtitle: "sottotitolo della card",
  content: "contenuto della card"
}


storiesOf('Card', module)
  .add('Default', () =>
    <List
      items={Array.from({length: 10}, () => props)}
      ListItem={({item}) => <Card {...item} />}
    />
  )
  .add('Card piene', () =>
  <List
    items={Array.from({length: 10}, () => props)}
    ListItem={({item}) => <Card {...item} options={{full:true}} />}
  />
)