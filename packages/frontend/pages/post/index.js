import React, { Component } from 'react'
import axios from 'axios'
import globalProvider from '../../hoc'
import * as S from './styles'
import { Background, Padder, Wrapper } from 'components/lib';

import api from '../../api'


class Page extends Component {

  static async getInitialProps(){

    return {
      seo:{
        title:"post"
      }
    }

  }

  render() {
    return(

      <S.Page>
      post
      </S.Page>

    )
  }
}

export default globalProvider()(Page)