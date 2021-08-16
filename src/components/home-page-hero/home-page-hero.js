import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const HomepageHeroItem = ({ item, index }) => {
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

const HomepageHero = ({ title, slides }) => {
  return (
    <div className={"cc--component-container cc--home-page-hero"}>
      <div className={'c--component c--home-page-hero'}>

        <div className={"swiper-container"}>
          <div className={"swiper-wrapper"}>
            
            {slides.map((item, i) => 
              <HomepageHeroItem item={item} key={item.id} />
            )}

          </div>
        </div>

        <div className={"swiper-controls"}>
          <div className={"button-container"}>
            <ul className={"swiper-button-wrapper"}>
              <li>
                <button type="button" aria-label="Previous Slide" className={"swiper-button-prev"} aria-controls="{{ container_id }}">
                  <svg height="15" viewBox="0 0 10 15" width="10" xmlns="http://www.w3.org/2000/svg">
                    <path d="m23.7857143 13-7.5 9-7.50000001-9z" fill="#ffb81a" fillRule="evenodd" transform="matrix(0 1 -1 0 22.785714 -8.785714)"/>
                  </svg>
                </button>
              </li>
              <li>
                <button type="button" aria-label="Next Slide" className={"swiper-button-next"} aria-controls="{{ container_id }}">
                  <svg height="15" viewBox="0 0 10 15" width="10" xmlns="http://www.w3.org/2000/svg">
                    <path d="m25.7857143 13-7.5 9-7.5-9z" fill="#ffb81a" fillRule="evenodd" transform="matrix(0 1 1 0 -12.214286 -10.785714)"/>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomepageHero
