import React from 'react'
import Link from 'next/link'

import * as S from './styles'


export default ({ menu }) => {
  
  const { items } = menu

  return(
    <S.Menu>
    {
      items.map(({ object, object_slug, title }) => {

        console.log("--------->", object_slug)
        return(
          <S.MenuItem>
            <Link href={`/${object_slug}`}>
              <S.A>
                <S.MenuItemTitle>{title}</S.MenuItemTitle>
              </S.A>
            </Link>
          </S.MenuItem>
        )
      })
    }
    </S.Menu>
  )
}