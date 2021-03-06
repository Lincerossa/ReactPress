import React, { Component } from 'react'
import { Background, Padder, Wrapper } from 'components/lib';
import axios from 'axios'

import globalProvider from 'hoc'
import api from 'api'
import * as S from './styles'

class Page extends Component {

  constructor() {
    super()
    this.state = {}
  }

  // handleSendEmail() {
  //   axios.post('/email', {
  //     data: {
  //       name: 'nome',
  //       email: 'marcelloluatti@test.com',
  //       messsage: 'ciao cicicno bellissimo'
  //     },
  //   })
  //   .then((response) => {
  //     console.log("response", response)
  //   })
  // }

  
  static async getInitialProps({ query }){

    const { posts, categories } = query

    return {
      categories,
      posts,
      query,
      seo:{
        title: "homepage"
      }
    }

  }

  render() {
    const { categories, posts } = this.props
    return(

      <S.Page>
         homepage
      </S.Page>

    )
  }
}

export default globalProvider()(Page)