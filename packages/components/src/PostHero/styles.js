import styled from 'styled-components'



export const MediaWrapper = styled.div`
  height: calc(100vh - 2.5rem);
  position: relative;
  &:before{
    content: "";
    position: absolute;
    background: linear-gradient(to top,rgba(0,0,0,.75),transparent);
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    background: linear-gradient(to top,rgba(0,0,0,.75),transparent);
  }
`

export const Media = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`

export const MediaHeader = styled.div`
  position: absolute;
  bottom: 3rem;
`


export const Supertitle = styled.div`
  font-family: sans-serif;
  color: orange;
  font-size: 1.25rem;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`

export const Title = styled.div`
  font-size: 3rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1rem;
  color: white;
`

export const Subtitle = styled.div`
  text-transform: uppercase;
  color: white;
`