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
    this.handleSendEmail = this.handleSendEmail.bind(this)
  }

  handleSendEmail() {
    axios.post('/email', {
      data: {
        name: 'nome',
        email: 'marcelloluatti@test.com',
        messsage: 'ciao cicicno bellissimo'
      },
    })
    .then((response) => {
      console.log("response", response)
    })
  }

  
  static async getInitialProps(){

    return {
      seo:{
        title: "homepage"
      }
    }

  }

  render() {
    return(

      <S.Page>
         homepage
         <button onClick={this.handleSendEmail}>invia email</button>
      </S.Page>

    )
  }
}

export default globalProvider({

  layout: {

    basic: true,
  }
  
})(Page)