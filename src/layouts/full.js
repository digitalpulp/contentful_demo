import React from 'react'
import Seo from './seo'
import Footer from './footer'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <main>
          {children}
        </main>
        <Footer />
      </>
    )
  }
}

export default Template
