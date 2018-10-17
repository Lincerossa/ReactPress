import React, { Component } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { Background, Padder, Wrapper, List, Card, RichText } from 'components/lib';


import globalProvider from '../../hoc'
import * as S from './styles'

import api from '../../api'

class Page extends Component {

  static async getInitialProps({ query }) {

    const { category, posts } = query
  
    return {
      seo: {
        title: category && category.name,
      },
      category,
      posts,
    }
  }

  render() {
    const { category, posts } = this.props
    
    return(
      <S.Page>
        <Wrapper>
          <Padder>
            <S.PageHeader>
              <RichText>
                <S.Title>{category.name}</S.Title>
                <S.Subtitle>{category.description}</S.Subtitle>
              </RichText>
            </S.PageHeader>
          </Padder>
        
          
        </Wrapper>
        
        {
          posts && posts.length > 0 &&
          <Wrapper>
            <List items={posts} ListItem={({item}) => {
              const { title, excerpt, slug, date } = item
              const props = {
                media: {
                  url: "http://www.unsplash.it/400/500",
                  title: "titolo dell'immagine",
                  alt: "titolo dell'immagine"
                },
                supertitle: category.name,
                title: title.rendered,
                subtitle: date,
                content: excerpt &&  excerpt.rendered
              }
                return <Link href={`/i-nostri-lavori/${category.name}/${slug}`}><S.A><Card {...props} full /></S.A></Link>
              }}
            />
          </Wrapper>
         
        }
      </S.Page>

    )
  }
}

export default globalProvider()(Page)