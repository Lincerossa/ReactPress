import React, { Component } from 'react'
import axios from 'axios'
import globalProvider from '../../hoc'
import * as S from './styles'
import { Background, Padder, Wrapper } from 'components/lib';

import api from '../../api'


class Page extends Component {

  static async getInitialProps(){

    const users = await axios.get(api.getUsers()).then(x => x.data)

    return {
      users,
      seo:{
        title:"users"
      }
    }

  }

  render() {

    const { users } = this.props


    return(

      <S.Page>
          <Background color={{
            background: "rebeccapurple",
            text: 'white'
          }}>
          <Padder>
            <Wrapper>
            {
              users &&
              users.length &&
              users.map(({name, link, avatar_urls}) => (
                <S.User>
                  <S.Avar src={avatar_urls[24]} />
                  <S.Link href={link}>{name}</S.Link>
                </S.User>
              ))
            }
            </Wrapper>
          </Padder>
            
          </Background>
        </S.Page>

    )
  }
}

export default globalProvider()(Page)