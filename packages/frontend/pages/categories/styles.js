import styled from 'styled-components'


export const Page = styled.div`
`

export const PageHeader = styled.div`
  position: relative;
  &:before{
    content: "";
    height: .5rem;
    position: absolute;
    bottom: -1.5rem;
    right: 0;
    left: 5rem;
    background-color: orange;
  }
`

export const Title = styled.h1`
  font-size: 4rem;
  color: orange;
  margin-bottom: 2rem;
`
export const Subtitle = styled.h2`
  padding-bottom: 1rem;
`

export const A = styled.div`
  text-transform: none;
  color: inherit;
  text-decoration: none;
`