import { compose } from 'recompose'
import withLayout from './withLayout'
import withThemeProvider from './withThemeProvider'


export default (options) => WrappedComponent => compose(
  withThemeProvider,
  withLayout(options),
)(WrappedComponent)