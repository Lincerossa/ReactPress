import React from 'react'
import { storiesOf } from '@storybook/react'

import posts from '../../data/posts'
import projects from '../../data/projects'
import List from './index'
import Card from '../Card'
import FocusCard from '../FocusCard'

const manyPosts = [
  ...posts,
  ...posts,
  ...posts,
  ...posts,
  ...posts,
  ...posts,
  ...posts,
]

const manyProjects = [
  ...projects,
  ...projects,
  ...projects,
  ...projects,
  ...projects,
  ...projects,
]



export default () =>
  storiesOf('List', module)

    .add('Default', () => <List
      items={manyPosts}
      ListItem={({ item }) => <Card {...item} />}
    />)

    .add('8 colonne', () => <List
      columns={8}
      items={manyPosts}
      ListItem={({ item }) => <Card {...item} />}
    />)

    .add('3 colonne con cardine full', () => <List
      columns={3}
      items={manyProjects}
      ListItem={({ item }) => <Card {...item} options={{full:true}} />}
    />)


    .add('con placeholder', () => <List
      columns={3}
      items={manyProjects}
      ListItem={({ item }) => <Card {...item} options={{full:true}} />}
      renderLastItem={() => <FocusCard url="#" title="Ultima card" content="Contenuto della card" />}
    />)

    .add('lista limitata', () => <List
      columns={3}
      limit={4}
      items={manyProjects}
      ListItem={({ item }) => <Card {...item} options={{full:true}} />}
    />)

    .add('2 colonne', () => <List
      columns={2}
      items={manyPosts}
      ListItem={({ item }) => <Card {...item} />}
    />)

    


