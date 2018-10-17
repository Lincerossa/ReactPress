import styled from 'styled-components'

export const Menu = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  
`

export const MenuItem = styled.div`
  margin-right: 1rem;
  cursor: pointer;
  position: relative;

  &:last-of-type{
    margin: 0;
  }

  &:hover > div {
   display: block;
  }
`

export const MenuItemTitle = styled.div`
  font-family: sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  padding: .25rem 0;
  letter-spacing: .04rem;
  bottom: 0;
  text-align: center;
`


export const A = styled.a``

export const MenuItemSub = styled.div`
  font-size: .5rem;
  display: none;
  position: absolute;
  top: 100%;
  background-color: white;
  z-index: 1;
`

export const Item = styled.div`

  &:before{
    content:"";
    width: 0;
    bottom: 0;
    position: absolute;
    height: 3px;
    background-color: orange;
    transition: all .2s;
  }

  &:hover {
    color: orange;
    & > div {
      color: black;
    }
    &:before{
      width: 100%;
    }
  }
`