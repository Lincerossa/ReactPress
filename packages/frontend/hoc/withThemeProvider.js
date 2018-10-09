import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

const withThemeProvider = (WrappedComponent) => {
  return class WithThemeProvider extends React.Component{

    static async getInitialProps(...args) {
      if(!WrappedComponent.getInitialProps ) {
        return {args}
      }

      const props = await WrappedComponent.getInitialProps(args)
      return {...props}
    }

      render(){
        const { props } = this
        return (
           <ThemeProvider theme={theme}>
            <WrappedComponent {...props} />
          </ThemeProvider>
        )
    }
  }
}

export default withThemeProvider