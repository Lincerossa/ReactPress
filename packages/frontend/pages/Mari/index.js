import React from 'react'
import globalProvider from '../../hoc'
import * as S from './styles'
import { Background, Padder, Wrapper, RichText } from 'components/lib';
import theme from '../../styles/theme';


const Page = (props) => {
  
  return <S.Page>
    <Background color={{
      background: theme.colors.main,
      text: 'white'
    }}>
    <Padder>
      <Wrapper>
        <RichText>
          <h1>Ciao Mariii!</h1>
        </RichText>

      </Wrapper>
    </Padder>
      
    </Background>
  </S.Page>
}

export default globalProvider()(Page)