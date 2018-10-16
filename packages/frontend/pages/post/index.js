import React, { Component } from 'react'
import axios from 'axios'
import globalProvider from '../../hoc'
import { Background, Padder, Wrapper, PostHero } from 'components/lib'
import * as S from './styles'

import api from '../../api'
import RichText from 'components/lib/RichText'


const ccc =  {
  media: {
    url: 'http://www.unsplash.it/600/300',
  },
  supertitle: 'Categoria',
  title: 'Titolo',
  subtitle: 'Sottotitolo',
}

class Page extends Component {

  static async getInitialProps({ query }){

    const { post, category } = query

    return {
      seo:{
        title: post.title.rendered
      },
      post,
      category,
    }

  }

  render() {
    
    const { post, category } = this.props

    return (

      <S.Page>
        <PostHero
          {...ccc}
          supertitle={category.name}
          title={post.title.rendered}
          subtitle={post.excerpt.rendered}
        />
        <RichText
        text={post.content.rendered} />
          
      </S.Page>

    )
  }
}

export default globalProvider()(Page)