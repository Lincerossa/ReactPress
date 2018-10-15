import React, { Component } from 'react'
import axios from 'axios'
import globalProvider from '../../hoc'
import * as S from './styles'
import { Background, Padder, Wrapper, List, Card } from 'components/lib';

import api from '../../api'


class Page extends Component {

  static async getInitialProps({ query }){

    const category = await axios.get(api.getCategoryBySlug(query.category)).then(x => x.data[0])

    const posts = category && await axios.get(api.getPostsByCategoryId(category.id)).then(x => x.data)
    
    return {
      seo:{
        title:"category"
      },
      category,
      posts,
    }

  }

  render() {
    const { category,posts } = this.props
    

    return(
      <S.Page>
        <h1>{category.name}</h1>
        <h2>{category.description}</h2>
        {
          posts && posts.length > 0 &&
          <List items={posts} ListItem={({item}) => {
            const { title, exerpt, content } = item
            const props = {
              media: {
                url: "http://www.unsplash.it/400/500",
                title: "titolo dell'immagine",
                alt: "titolo dell'immagine"
              },
              supertitle: category.name,
              title: title.rendered,
              subtitle:exerpt &&  exerpt.rendered,
              content: content.rendered
            }
              return <Card {...props} full />
            }}
          />
        }
      category
      </S.Page>

    )
  }
}

export default globalProvider()(Page)