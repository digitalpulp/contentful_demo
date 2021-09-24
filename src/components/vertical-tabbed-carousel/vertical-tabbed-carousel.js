import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const VerticalTabbedCarouselItem = ({ item, index }) => {
  return (
    <div className={"cc--component-container cc--vertical-tabbed-carousel-slide swiper-slide"}>
      <div className={'c--component c--vertical-tabbed-carousel-slide'}>

        {item.image != null &&
          <GatsbyImage alt="" image={item.image.gatsbyImageData} className="f--field f--image" style={{width: '100%', height: '0'}} />
        }

        <div className={"text-container-wrapper"}>
            <div className={"text-container"}>
              <div className={"text-container-inner"}>
                <h2 className={'tab-title'}>{item.title}</h2>

                {item.description != null && 
                  <div className={"f--field f--description"}
                    dangerouslySetInnerHTML={{
                      __html: '<strong class="tab-caption">' + item.title + '</strong>' + item.description.childMarkdownRemark.html,
                    }}>
                  </div>
                }

                {item.link != null && 
                  <div className={'f--field f--link'}>
                    <a className={"button button--svg ally-focus-within"} href={item.link.url} aria-hidden="false" tabIndex="0">
                      <span>{item.link.title} <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 9 15" xmlSpace="preserve"><polygon points="0,0 9,7.5 0,15 "></polygon></svg></span>
                    </a>
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
                    {slides.map((item, i) => 
                      <li className={'swiper-pagination-customs'} key={i}><button className={'side-nav-link'}>{item.title}</button></li>
                    )}
                  </ul>
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
