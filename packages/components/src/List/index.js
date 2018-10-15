import React from 'react'
import * as S from './styles'


const getListItems = ({items, limit}) => {
  if(!limit) {
    return items
  }
  return items.slice(0,limit)
}


export default ({ columns = 4, items, vertical, ListItem, limit, renderLastItem }) => {
  const listItems = items && items.length > 0 && getListItems({items, limit})
  if(!listItems || !listItems.length) { return null }
  return(
    <S.List vertical={vertical}>
      {
        listItems.map((item, key) => {
          return(<S.ListItemWrapper columns={columns} key={key}>
            <ListItem item={item} />
          </S.ListItemWrapper>)
        })
      }
      {renderLastItem && typeof renderLastItem === 'function' && 
        <S.ListItemWrapper columns={columns}>
        {renderLastItem()}
        </S.ListItemWrapper>
      }
    </S.List>
  )
}