import React from 'react'
import Head from 'next/head'

import * as S from './styles'

import Header from './Header'

export default ({children, options, seo}) => {
  
  const basic = options && options.layout && options.layout.basic

  const { title } = seo
   return(
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description"  />
      </Head>
      <S.Layout basic={basic} >
      { !basic && <S.HeaderWrapper><Header /></S.HeaderWrapper>}
        <S.Main>
          {children}
        </S.Main>
        { !basic && <S.FooterWrapper>footerWrapper</S.FooterWrapper>}
      </S.Layout>
    </React.Fragment>
  )
}