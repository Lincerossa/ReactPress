import React, { Component } from 'react'
import axios from 'axios'
import Link from 'next/link'


import globalProvider from '../../hoc'
import * as S from './styles'
import { Background, Padder, Wrapper, List, Card } from 'components/lib';

import api from '../../api'
import { RichText } from 'components/lib/RichText/styles';


class Page extends Component {

  static async getInitialProps({ query }) {
    
    const category = await axios.get(api.getCategories({ slug: query.category })).then(x => x.data[0])
    const posts = category && await axios.get(api.getPosts({ category: category.id })).then(x => x.data)

    return {
      seo: {
        title: category.name,
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
              const { title, exerpt, content, slug } = item
              console.log("item", item)
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
                return <Link href={`/${category.name}/${slug}`}><S.A><Card {...props} full /></S.A></Link>
              }}
            />
          </Wrapper>
         
        }
      </S.Page>

    )
  }
}

export default globalProvider()(Page)