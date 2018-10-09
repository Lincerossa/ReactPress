import styled from 'styled-components'


export const Padder = styled.div`
  padding: ${(props) => {
    switch (props.size) {
      case 'small':
        return '1.25rem 0;'
      default:
        return '3.125rem 0;'
    }
  }};

  @media screen and (min-width: 768px) {
    padding: ${(props) => {
    switch (props.size) {
      case 'small':
        return '2.5rem 0;'
      default:
        return '6.25rem 0;'
    }
  }};
  }
  padding-top: ${(props) => props.noPaddingTop ? '0 !important' : 'auto'};
  padding-bottom: ${(props) => props.noPaddingBottom ? '0 !important' : 'auto'};
`
