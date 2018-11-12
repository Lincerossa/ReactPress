import React, { Component } from 'react'
import { Background, Padder, Wrapper, RichText } from 'components/lib';
import axios from 'axios'

import globalProvider from 'hoc'
import api from 'api'
import getPropsFromWpContent from 'utility/getPropsFromWpContent'
import * as S from './styles'


var decode = (str) => {
    return str.replace(/&#(\d+);/g, function(match, dec) {
				return String.fromCharCode(dec);
			});
}

class Page extends Component {

  constructor() {
    super()
    this.state = {}
  }

 
  static async getInitialProps({ query }){
 
    const { page } = query


    return {
      page,
      
      seo:{
        title: "chi siamo"
      }
    }

  }

  render() {
    
    const { page, users } = this.props

    console.log("-----",page.content.rendered)

    return(

      <S.Page>
        pagina istituzionale standard
        <RichText text={page.content.rendered} />
      </S.Page>

    )
  }
}

export default globalProvider()(Page)