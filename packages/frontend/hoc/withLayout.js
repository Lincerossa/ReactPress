import React from 'react'
import { Layout } from '../components'



const WithLayout = (options) => WrappedComponent => props => {
  return (
    <Layout options={options} {...props}>
      <WrappedComponent {...props} />
    </Layout>
  )
}

export default WithLayout