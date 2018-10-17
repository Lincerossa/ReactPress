import React from 'react'

import * as S from './styles'


export default ({ menu }) => {
  console.log("menu----->", menu)
  return(
  <S.Header>
    <S.HeaderLogo>qui logo</S.HeaderLogo>
    <S.HeaderHamburger>qui hamburger</S.HeaderHamburger>
  </S.Header>
  )
}