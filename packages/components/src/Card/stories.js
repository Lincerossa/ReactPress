import React from 'react'
import { storiesOf } from '@storybook/react'

import Card from './index'

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



export default () =>
  storiesOf('Card', module)
    .add('Default', () => <Card {...props} />)
    .add('full', () => <Card {...props} options={{full:true}} />)