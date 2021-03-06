import styled from 'styled-components'


export const List = styled.div`
  padding: 0;
  margin: 0 -.5rem;
  display: ${props => props.vertical ? 'block': 'flex'};
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`

export const ListItemWrapper = styled.div`
  margin: .5rem;
  flex-basis: 300px;
  flex-shrink: 0;

  @media screen and (min-width: 768px) {
    flex-basis: ${props => `calc(${100/props.columns}% - 1rem)`};
    
  }

`