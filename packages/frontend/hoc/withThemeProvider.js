import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'


const WithThemeProvider = WrappedComponent => props => {
  return (
    <ThemeProvider theme={theme}>
      <WrappedComponent {...props} />
    </ThemeProvider>
  )
}

export default WithThemeProvider