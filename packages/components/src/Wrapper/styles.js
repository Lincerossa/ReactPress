import styled from 'styled-components'


export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${(props) => {
    switch (props.size) {
      case 'small':
        return '800px'
      default:
        return '1100px'
    }
  }};
`
