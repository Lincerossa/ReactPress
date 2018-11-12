import React, { Component } from 'react'
import axios from 'axios'
import globalProvider from 'hoc'
import * as Components from 'components/lib'
import * as S from './styles'
import getPropsFromWpContent from 'utility/getPropsFromWpContent'
import api from 'api'


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

    const propsFromWpContent = getPropsFromWpContent(post.content.rendered)

    return (

      <S.Page>
        <Components.PostHero
          {...ccc}
          supertitle={category.name}
          title={post.title.rendered}
          subtitle={post.excerpt.rendered}
        />
        {
          propsFromWpContent &&
          propsFromWpContent.map(prop => {
            const CC = Components[prop.Component]
            return CC && <CC {...prop.props} />
          })
        }
          
      </S.Page>

    )
  }
}

export default globalProvider()(Page)