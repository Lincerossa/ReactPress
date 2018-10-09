import React from 'react'
import * as S from './styles'

import Head from 'next/head'


export default ({children, options}) => {
  
  const basic = options && options.layout && options.layout.basic

   return(
    <React.Fragment>
      <Head>
        <title>titolo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description"  />
      </Head>
      <S.Layout basic={basic} >
      {/* { !basic && <div>header</div>} */}
        <S.Main>
          {children}
        </S.Main>
        {/* { !basic && <div>footer</div>} */}
      </S.Layout>
    </React.Fragment>
  )
}