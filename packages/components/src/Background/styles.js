import styled from 'styled-components'


export const Background = styled.div`
  background-color: ${props => props.color.background};
  color: ${props => props.color.text};
  * {
    color: ${props => props.color.text};
  }
`
