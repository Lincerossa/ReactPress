import React, { Component } from 'react'
import axios from 'axios'
import globalProvider from '../../hoc'
import * as S from './styles'
import { Background, Padder, Wrapper, RichText, List, Card } from 'components/lib';

import api from '../../api'

class Page extends Component {

  static async getInitialProps(){

    const authors = await axios.get(api.authors).then(x => x.data)

    const media = await axios
      .get(api.media)
      .then(x => x.data)

    return {
      media: media.map( x => ({
        ...x,
        author: authors.find(author => author.id === x.author)
      }))
    }

  }

  render() {

    const { media } = this.props

    return(

      <S.Page>
        <Background color={{
          background: "rebeccapurple",
          text: 'white'
        }}>
          <Padder>
            <Wrapper>
            {
              media &&
              media.length && (
                <List
                  items={media}
                  ListItem={({item}) => {
                    const { guid, caption, alt_text, date, title, type, author } = item

console.log("------->", item)
                    const props = {
                      media: {
                        url: guid.rendered,
                        title: title.rendered,
                        alt: "titolo dell'immagine"
                      },
                      tags: [type],
                      supertitle: author && author.name,
                      title: title.rendered,
                      subtitle: caption.renderd,
                      content: alt_text
                    }
                    return <Card {...props} />
                  }}
                />
              )
            }
            </Wrapper>
          </Padder>
        </Background>
      </S.Page>

    )
  }
}

export default globalProvider()(Page)