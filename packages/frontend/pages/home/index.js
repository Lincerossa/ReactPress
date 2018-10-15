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
        title:"homepage"
      }
    }

  }

  render() {
    return(

      <S.Page>
         homepage
      </S.Page>

    )
  }
}

export default globalProvider({

  layout: {

    basic: true,
  }
  
})(Page)