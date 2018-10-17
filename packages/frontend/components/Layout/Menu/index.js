import React from 'react'
import Link from 'next/link'

import * as S from './styles'


const Item = ({href, text}) => (
  <S.Item>
    {
      href ? (
         <Link href={`/${href}`}>
          <S.A>
            <S.MenuItemTitle>{text}</S.MenuItemTitle>
          </S.A>
        </Link>
      ) : (
        <S.MenuItemTitle>{text}</S.MenuItemTitle>
      )
    }
  </S.Item>
)




export default ({ menu }) => {
  
  const { items } = menu
  
  return(
    <S.Menu>
      <S.MenuItem>
        <Item
          href=" "
          text="homepage"
        />
      </S.MenuItem>

    {
      items.map(({ object, object_slug, title, children }) => {
        return(
          <S.MenuItem>

            <Item
              href={object_slug}
              text={title}
            />
            {children && children.length > 0 && <S.MenuItemSub>
              {
                children.map(({object_slug, title}) => (
                  <Item
                    href={object_slug}
                    text={title}
                  />
                ))
              }
            </S.MenuItemSub>}
          </S.MenuItem>
        )
      })
    }
    </S.Menu>
  )
}