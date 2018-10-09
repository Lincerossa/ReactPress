import { compose } from 'recompose'
import withLayout from './withLayout'
import withThemeProvider from './withThemeProvider'


export default (options) => (WrappedComponents) => compose(
  withThemeProvider,
  withLayout(options),
)(WrappedComponents)