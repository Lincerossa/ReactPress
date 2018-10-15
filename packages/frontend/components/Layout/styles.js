import styled from 'styled-components'


const headerHeight = '3.5rem'

export const Layout = styled.div`
  ${props => !props.basic ? `padding-top: ${headerHeight}` : ''};
`

export const Main = styled.main`
  min-height: calc(100vh - 3.5rem);
`

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  height: ${headerHeight};
  left: 0;
  right: 0;
  background: cornsilk;
`

export const Header = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`

export const HeaderLogo = styled.div``
export const HeaderHamburger = styled.div``




export const FooterWrapper = styled.div`
  background-color: black;
`