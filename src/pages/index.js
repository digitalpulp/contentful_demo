import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import HomepagePostTemplate from '../templates/homepage-post'

class RootIndex extends React.Component {
  render() {
    return (
      <HomepagePostTemplate pageData={get(this.props, 'data.allContentfulHomePage.nodes[0]')} />
    )
  }
}

export default RootIndex

export const query = graphql`
  query RootIndexQuery {
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
