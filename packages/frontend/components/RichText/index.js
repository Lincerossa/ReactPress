import React from 'react'
import * as S from './styles.js'

export default ({ text, children }) => {

  if(text) return (<S.RichText
    dangerouslySetInnerHTML={{__html: text}}
  />)

  if(children) return <S.RichText>{children}</S.RichText>

  return null
}
