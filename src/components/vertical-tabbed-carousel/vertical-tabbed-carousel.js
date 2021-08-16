import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const VerticalTabbedCarouselItem = ({ item, index }) => {
  return (
    <div className={"cc--component-container cc--home-page-hero-item swiper-slide"}>
      <div className={'c--component c--home-page-hero-item'}>

        <div className="image-video">

          <div className="text-wrapper">
            <div className={item.textAlignment === 'Left' ? "textural-text left" : 'textural-text right'} role="presentation" aria-hidden="true">
              {item.texturalType}
            </div>
          </div>

          {item.image != null &&
            <GatsbyImage alt="" image={item.image.gatsbyImageData} className="f--field f--image" style={{width: 'auto', height: '100vh'}} />
          }

        </div>

        <div className={"text-container-wrapper"}>
            <div className={"text-container"}>
              <div className={"text-container-inner"}>
                <div className={"f--field f--section-title"}>
                  <h2>
                    {item.title}
                  </h2>
                </div>
                {item.description != null && 
                  <div className={"f--field f--description"}
                    dangerouslySetInnerHTML={{
                      __html: item.description.childMarkdownRemark.html,
                    }}>
                  </div>
                }
              </div>
            </div>
          </div>

      </div>
    </div>
  )
}

const VerticalTabbedCarousel = ({ data }) => {
  const title = data.title
  const slides = data.slides

  return (
    <div className={"cc--component-container cc--vertical-tabbed-carousel"}>
      <div className={'c--component c--vertical-tabbed-carousel'}>

        <div className={'f--field f--slides'}>

          <div className={'left-container'}>

            <div className={'left-container-inner side-titles'}>

              <div className={'f--field f--section-title'}>
                <h2>{title}</h2>
              </div>

              <div className={'side-nav'}>
                <div className={'side-nav-inner'}>
                  <ul className={'swiper-pagination swiper-pagination-clickable swiper-pagination-bullets'}>
                    <li className={'swiper-pagination-customs'}><button class={'side-nav-link'}>New York City Campus</button></li>
                    <li className={'swiper-pagination-customs'}><button class={'side-nav-link'}>Westchester Campus</button></li>
                    <li className={'swiper-pagination-customs'}><button class={'side-nav-link'}>Haub Law Campus</button></li>
                    <li className={'swiper-pagination-customs'}><button class={'side-nav-link'}>Pace Online</button></li></ul>
                </div>
              </div>

            </div>
            
          </div>

          <div className={'swiper-container right-container'}>
            <div className={'swiper-wrapper'}>
              
              {slides.map((item, i) => 
                <VerticalTabbedCarouselItem item={item} key={item.id} />
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default VerticalTabbedCarousel
