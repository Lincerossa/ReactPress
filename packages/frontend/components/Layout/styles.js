import styled from 'styled-components'


export const Layout = styled.div`
  ${props => !props.basic ? 'padding-top: 3rem' : ''};
`

export const Main = styled.main`
`