import React from 'react'
import * as S from './styles'

const Wrapper = ({ children, size }) => (
  <S.Wrapper size={size}>
    {children}
  </S.Wrapper>
)

export default Wrapper
