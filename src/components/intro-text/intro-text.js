import React from 'react'

const IntroText = ({ data }) => {
  const title = data.title
  const description = data.description
  const links = data.links

  return (
    <div className={'cc--component-container cc--intro-text full-width-text'}>
      <div className={'c--component c--intro-text'}>

        <div className={'text-container'}>

          <div className={'f--field f--section-title'}>
            <h2>{title}</h2>
          </div>

          {description != null && 
            <div className={'f--field f--description'}
              dangerouslySetInnerHTML={{
                __html: description.childMarkdownRemark.html,
              }}>
            </div>
          }

          {links != null && 
            <div className={'link-list'}>
              {links.map((item, i) => 
                <div className={'f--field f--link'} key={item.id}>
                  <a className={'button button-svg'} href={item.url}>
                    <span>
                      {item.title}
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 9 15" style={{enableBackground: 'new 0 0 9 15'}} xmlSpace="preserve"><polygon points="0,0 9,7.5 0,15 "></polygon></svg>
                    </span>
                  </a>
                </div>
              )}
            </div>
          }

        </div>

      </div>
    </div>
  )
}

export default IntroText
