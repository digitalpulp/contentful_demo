import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import LayoutFull from '../layouts/full'
import HomepageHero from '../components/home-page-hero/home-page-hero'
import IntroText from '../components/intro-text/intro-text'
import VerticalTabbedCarousel from '../components/vertical-tabbed-carousel/vertical-tabbed-carousel'

class HomepagePostTemplate extends React.Component {
  render() {
    // FIXME: more gracefully take a property OR take from data bag
    const post = get(this.props, 'data.contentfulHomePage', this.props.pageData)
    const title = post.title
    const heroCarousel = post.heroCarousel
    const components = post.components

    return (
      <LayoutFull location={this.props.location}>

        <HomepageHero
          title={title}
          slides={heroCarousel}
        />
 
        <div className='content-main'>
          <div className='lc--layout-container lc--full'>
            <div className='l--layout l--full'>
              <div className='lr--layout-region lr--main'>

              {components.map((item, i) => {
                let component

                if (item.sys.contentType.sys.id === 'introText')
                  component = <IntroText data={item} key={item.id} />
                else if (item.sys.contentType.sys.id === 'verticalTabbedCarousel')
                  component = <VerticalTabbedCarousel data={item} key={item.id} />

                return component
              })}

              </div>
            </div>
          </div>
        </div>

      </LayoutFull>
    )
  }
}

export default HomepagePostTemplate

export const pageQuery = graphql`
  query HomepagePostById(
    $contentful_id: String!
  ) {
    contentfulHomePage(contentful_id: { eq: $contentful_id }) {
      id
      contentful_id
      title
      heroCarousel {
        id
        title
        description {
          childMarkdownRemark {
            html
          }
        }
        image {
          gatsbyImageData(
            layout: FIXED
            width: null
            height: null
            quality: 70
          )
        }
        texturalType
        textAlignment
      }

      components {

        ... on ContentfulIntroText {
          id
          sys {
            contentType {
              sys {
                id
              }
            }
          }
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          links {
            id
            title
            url
          }
        }

        ... on ContentfulVerticalTabbedCarousel {
          id
          sys {
            contentType {
              sys {
                id
              }
            }
          }
          title
          slides {
            id
            description {
              childMarkdownRemark {
                html
              }
            }
            image {
              gatsbyImageData(
                layout: FIXED
                width: null
                height: null
                quality: 70
              )
            }
            link {
              id
              title
              url
            }
          }
        }
        
      }
    }
  }
`
