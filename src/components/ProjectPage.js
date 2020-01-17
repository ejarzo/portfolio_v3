import React from 'react';
import Header from '../components/Header.js';
import Img from 'gatsby-image';
import SEO from '../components/seo';

export default props => {
  const { title, links, Content, invertedHeader, bannerImage } = props;

  return (
    <div>
      <SEO title={title} />
      {bannerImage && (
        <Img
          fluid={bannerImage.childImageSharp.fluid}
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: 400,
          }}
        />
      )}
      <div>
        <div className="SiteWrapper">
          <Header inverted={invertedHeader} />
          <div className="row">
            <div className="col-12">
              <h1 className="ProjectPage__Title">{title}</h1>
              {links && (
                <div>
                  <div className="ProjectPage__Links">
                    {links.map(({ label, href }, i) => (
                      <a key={label} href={href} target="blank">
                        {label} {i < links.length - 1 && '/ '}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className="SiteWrapper"
        style={{ position: 'relative', zIndex: 1, top: 140 }}
      >
        <div className="row">
          <div className="col-12">
            {Content && (
              <div>
                <Content />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};