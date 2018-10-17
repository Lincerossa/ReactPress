import styled from 'styled-components'


const headerHeight = '3.5rem'

export const Layout = styled.div`
  ${props => !props.basic ? `padding-top: ${headerHeight}` : ''};
`

export const Main = styled.main`
  min-height: calc(100vh - 3.5rem);
`


export const Header = styled.div`
  position: fixed;
  top: 0;
  height: ${headerHeight};
  left: 0;
  right: 0;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  background-color: white;
  box-shadow: 0 0 9.5px 0.5px rgba(0,0,0,.15);
`

export const HeaderLogo = styled.div``


export const FooterWrapper = styled.div`
  background-color: black;
`

export const A = styled.a`

`

