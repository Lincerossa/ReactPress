import React, { Component } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { Background, Padder, Wrapper, List, Card, RichText } from 'components/lib';


import globalProvider from '../../hoc'
import * as S from './styles'

import api from '../../api'

class Page extends Component {

  static async getInitialProps({ query }) {

    const { url } = query
    const categories = await axios.get(api.getCategories()).then(x => x.data)

    return {
      seo: {
        title: url,
      },
      categories,
    }
  }

  render() {
    const { categories } = this.props

    return(
      <S.Page>
        <Wrapper>
          <Padder>
            <S.PageHeader>
              <RichText>
                <h1>Categdorie</h1>
              </RichText>
            </S.PageHeader>
          </Padder>
        
          
        </Wrapper>
        
        {
          categories && categories.length > 0 &&
          <Wrapper>
            <List items={categories} ListItem={({item}) => {
              const { name, count, description, slug, date } = item
              
              const props = {
                media: {
                  url: "http://www.unsplash.it/400/500",
                  title: "titolo dell'immagine",
                  alt: "titolo dell'immagine"
                },
                supertitle: `n° art ${count}`,
                title: name,
                subtitle: 'sottotitolo',
                content: description
              }
                return <Link href={`/i-nostri-lavori/${slug}`}><S.A><Card {...props} full /></S.A></Link>
              }}
            />
          </Wrapper>
         
        }
      </S.Page>

    )
  }
}

export default globalProvider()(Page)