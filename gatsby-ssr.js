// Import React so that you can use JSX in HeadComponents
const React = require("react")

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
  <>
    <link key="swiper-css" rel="stylesheet" media="all" href="/css/vendor/swiper.min.css" />
    <link key="pace-css" rel="stylesheet" media="all" href="/css/style.css" />
  </>
]

const BodyAttributes = {
  "data-theme": "dark"
}

const PostBodyComponents = [
  <>
    <script key="jquery" src="/js/vendor/jquery.min.js" />
    <script key="jquery-once" src="/js/vendor/jquery.once.min.js" />
    <script key="swiper-js" src="/js/vendor/swiper-bundle.min.js" />

    <script key="dp" src="/js/DP.js"></script>
    <script key="homepage-hero" src="/js/homepageHero.js"></script>
  </>
]

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
  setPostBodyComponents
}, pluginOptions) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
  setBodyAttributes(BodyAttributes)
  setPostBodyComponents(PostBodyComponents)
}
