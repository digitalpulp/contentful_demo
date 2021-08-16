const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/blog-post.js')
  const homePagePost = path.resolve('./src/templates/homepage-post.js')

  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  const homePageResult = await graphql(
    `
      {
        allContentfulHomePage {
          nodes {
            id
            contentful_id
            title
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  if (homePageResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful homePage posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulBlogPost.nodes
  const homePagePosts = homePageResult.data.allContentfulHomePage.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug
      const nextPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug

      createPage({
        path: `/blog/${post.slug}/`,
        component: blogPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }

  if (homePagePosts.length > 0) {
    homePagePosts.forEach((post, index) => {
      createPage({
        path: `/preview/${post.contentful_id}/`,
        component: homePagePost,
        context: {
          id: post.id,
          contentful_id: post.contentful_id
        },
      })
    })
  }
}
