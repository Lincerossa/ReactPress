import React from 'react'
import * as S from './styles'

const Background = ({ color, children }) => (
  <S.Background
    color={color}
  >
    {children}
  </S.Background>
)


export default Background
