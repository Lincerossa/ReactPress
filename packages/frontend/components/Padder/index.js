import React from 'react'
import * as S from './styles'

const Padder = ({ children, size, noPaddingTop, noPaddingBottom }) => (
  <S.Padder
    size={size}
    noPaddingBottom={noPaddingBottom}
    noPaddingTop={noPaddingTop}
  >
    {children}
  </S.Padder>
)


export default Padder
