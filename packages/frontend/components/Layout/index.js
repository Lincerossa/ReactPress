import React from 'react'
import Head from 'next/head'

import * as S from './styles'

import Header from './Header'
import Footer from './Footer'

export default ({children, options, seo, menu, footer}) => {
  
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
        { !basic && (
        <S.HeaderWrapper>
          <Header menu={menu} />
        </S.HeaderWrapper>
        )}
        <S.Main>
          {children}
        </S.Main>
        { !basic && (
          <S.FooterWrapper footer={footer}>
            <Footer footer={footer} />
          </S.FooterWrapper>
        )}
      </S.Layout>
    </React.Fragment>
  )
}