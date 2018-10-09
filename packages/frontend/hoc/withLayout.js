import React from 'react'
import { Layout } from '../components'

const withLayout = (options) => WrappedComponent => {
  return class WithLayout extends React.Component{

      static async getInitialProps(...args) {
        const props = await WrappedComponent.getInitialProps(args)
        return props
      }

      render(){
        const { props } = this
        return (
          <Layout options={options} {...props}>
            <WrappedComponent {...props} />
          </Layout>
        )
    }
  }
}

export default withLayout