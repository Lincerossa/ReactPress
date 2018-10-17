import React, { Component } from 'react'
import { Background, Padder, Wrapper } from 'components/lib';
import axios from 'axios'

import globalProvider from '../../hoc'
import * as S from './styles'
import api from '../../api'

class Page extends Component {

  constructor() {
    super()
    this.state = {}
  }

 
  static async getInitialProps(props){
    return {
      seo:{
        title: "team"
      }
    }

  }

  render() {
    return(

      <S.Page>
         team
      </S.Page>

    )
  }
}

export default globalProvider()(Page)