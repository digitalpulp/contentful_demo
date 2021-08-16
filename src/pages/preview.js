import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import LayoutFull from '../layouts/full'
import HomepageHero from '../components/home-page-hero/home-page-hero'
import IntroText from '../components/intro-text/intro-text'
import VerticalTabbedCarousel from '../components/vertical-tabbed-carousel/vertical-tabbed-carousel'

class PreviewIndex extends React.Component {
  render() {
    const title = get(this.props, 'data.allContentfulHomePage.nodes[0].title')
    const heroCarousel = get(this.props, 'data.allContentfulHomePage.nodes[0].heroCarousel')
    const components = get(this.props, 'data.allContentfulHomePage.nodes[0].components')

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

export default PreviewIndex

export const query = graphql`
  query PreviewPageQuery {
    allContentfulHomePage {
      nodes {
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
  }
`

/*
export const pageQueryOld = graphql`
  query HomeQueryOld {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          shortBio
        }
        title
        heroImage: image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1180
          )
        }
      }
    }
  }
`
*/
