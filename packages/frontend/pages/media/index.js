import React, { Component } from 'react'
import axios from 'axios'
import globalProvider from '../../hoc'
import * as S from './styles'
import { Background, Padder, Wrapper, RichText } from 'components/lib';

import api from '../../api'


class Page extends Component {

  static async getInitialProps(){

    const media = await axios.get(api.media).then(x => x.data)

    console.log("mediaaaaaaaaaa", media)
    
    return {
      media,
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
              media.length &&
              media.map(({media_details, description, date}) => {
                const image = media_details && media_details.sizes && media_details.sizes.medium && media_details.sizes.medium.source_url

                return(
                  <S.Media>
                    <S.Image src={image} />
                    {description &&  <RichText>{description.rendered}</RichText>}
                  </S.Media>
                )
              }

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