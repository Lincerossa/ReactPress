import React from 'react'
import axios from 'axios'

import Layout from 'components/Layout'
import api from 'api'

const getMenus = async () => {
  const menus = await axios.get(api.getMenus).then(x => x.data)
  const menuObj = menus.find(menu => menu.name === 'menu')
  const footerObj = menus.find(menu => menu.name === 'footer')
  return{
    menu: menuObj && await axios.get(menuObj.meta.links.self).then(x => x.data),
    footer: footerObj && await axios.get(footerObj.meta.links.self).then(x => x.data)
  }
}

const withLayout = (options) => WrappedComponent => {
  return class WithLayout extends React.Component{

      static async getInitialProps(...args) {
        if(!WrappedComponent.getInitialProps ) {
          return {}
        }

        const props = await WrappedComponent.getInitialProps(...args)

        return {
          ...await getMenus(),
          ...props
        }
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