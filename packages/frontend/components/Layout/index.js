import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import * as S from './styles'

import Footer from './Footer'
import Menu from './Menu'

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
          <S.Header>
            <Link href="/">
              <S.A>
                <S.HeaderLogo>qui logo</S.HeaderLogo>
              </S.A>
            </Link>
            <Menu menu={menu}>qui hamburger</Menu>
          </S.Header>
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