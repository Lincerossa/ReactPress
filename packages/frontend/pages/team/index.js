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

 
  static async getInitialProps(props){
    const users = await axios.get(api.getUsers()).then(x => x.data)
    return {
      users,
      seo:{
        title: "team"
      }
    }

  }

  render() {
    const { users } = this.props
    return(

      <S.Page>
         team
          {
          users.map(user => <p>{user.name}</p>)
        }
      </S.Page>

    )
  }
}

export default globalProvider()(Page)