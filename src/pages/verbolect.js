import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
  const { bannerImage, image1, image2, image3 } = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "verbolect-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image1: file(relativePath: { eq: "verbolect1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "verbolect2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "verbolect4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div>
      <ProjectPage
        invertedHeader
        title="Verbolect"
        bannerImage={bannerImage}
        links={[
          { label: 'Project Website', href: 'http://verbolect.com/' },
          { label: 'Code', href: 'https://github.com/ejarzo/verbolect/' },
          {
            label: 'Press Release',
            href:
              'https://www.pierogi2000.com/2017/08/noncore-projector-at-the-boiler/',
          },
        ]}
        Content={() => (
          <div>
            <p>
              Featured in: The{' '}
              <a
                href="https://www.nytimes.com/2017/11/08/arts/design/what-to-see-in-new-york-art-galleries-this-week.html"
                target="blank"
              >
                New York Times
              </a>
              ,{' '}
              <a href="https://www.screenslate.com/" target="blank">
                Screen Slate
              </a>
              .
            </p>
            <p>
              Verbolect is visual exploration of a conversation between{' '}
              <a href="http://www.cleverbot.com/" target="blank">
                Cleverbot
              </a>{' '}
              and itself. Cleverbot is a chatbot that uses artificial
              intelligence to talk with users. First made available in 1997, it
              learns from its conversations to generate responses, so everything
              that Cleverbot says has at some point been said to it. In this
              way, the project is as much an exploration of human tendencies as
              it is of artificial intelligence.
            </p>
            <p className="MediaWrapper">
              <Img fluid={image2.childImageSharp.fluid} />
            </p>

            <p>
              The installation, which allows you to see and hear the
              conversation, ran continuously from October 20 to November 19,
              2017 at{' '}
              <a
                href="http://www.pierogi2000.com/2017/08/noncore-projector-at-the-boiler/"
                target="blank"
              >
                The Boiler
              </a>{' '}
              in Brooklyn.
            </p>
            <p className="MediaWrapper">
              <Img fluid={image1.childImageSharp.fluid} />
            </p>

            <p>
              Below is one of the many streams that were recorded during the
              exhibition.
            </p>
            <p className="MediaWrapper">
              <div
                style={{
                  padding: '56.25% 0 0 0',
                  position: 'relative',
                }}
              >
                <iframe
                  title="Verbolect screen capture"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  src="https://www.youtube.com/embed/rU3ADcOaLvU?start=1454"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </p>
            <p>
              This project was a collaboration with artist and teacher{' '}
              <a href="http://www.johnjoconnor.net" target="blank">
                John O'Connor
              </a>
              , Cleverbot creator and AI expert{' '}
              <a
                href="https://en.wikipedia.org/wiki/Rollo_Carpenter"
                target="blank"
              >
                Rollo Carpenter
              </a>
              , and multimedia artist{' '}
              <a
                href="https://www.instagram.com/jakecalcium/?hl=en"
                target="blank"
              >
                Jack Colton
              </a>
              . Together we founded a collective called{' '}
              <a href="https://www.facebook.com/verbolect/" target="blank">
                NonCoreProjector
              </a>
              .
            </p>
            <p className="MediaWrapper">
              <Img fluid={image3.childImageSharp.fluid} />
            </p>
            <p>
              <strong>My Role: </strong>I implemented the projection, which
              manifests itself as a web application that uses several{' '}
              <a
                href="https://en.wikipedia.org/wiki/Application_programming_interface"
                target="blank"
              >
                APIs
              </a>{' '}
              to retrieve data that is then interpreted on the screen. The{' '}
              <a href="https://www.cleverbot.com/api/" target="blank">
                Cleverbot API
              </a>{' '}
              is the backbone of the piece. In addition to generating the
              conversation, it provides emotional analysis for each reply that
              we use to source images, videos, and audio. To get the idea, here
              is an example response from the API (these are the most relevant
              fields; the full response has many more).
            </p>
            <p className="code">
              emotion: "calm",
              <br />
              emotion_degree: "32",
              <br />
              emotion_tone: "0",
              <br />
              emotion_values: "0,0,0,0,40,0,0",
              <br />
              input: "Nice to meet you, too!",
              <br />
              output: "What are you doing now?",
              <br />
              output_label: "welcome",
              <br />
              reaction: "pleased",
              <br />
              reaction_degree: "65",
              <br />
              reaction_tone: "1",
              <br />
              reaction_values: "0,0,0,0,60,0,0"
            </p>

            <p>
              We use these values to draw graph the conversation, control
              parameters in a force simulation, and find online content via
              external APIs (YouTube, stock footage, etc). These distinct
              "modules" are explored by a roving eye while the conversation
              takes place.
            </p>
            <p>
              <em>
                The main organizational construct of the projection is of a
                roving eye — simultaneously the idea of the bot searching
                outside of itself, into the world, looking for patterns, and of
                us, looking into its brain as if through a peephole. The
                emotional intensity of the words the bot speaks will dictate the
                substance, pace and movements of the projection’s machinations.
              </em>
            </p>
            <p>
              <a
                href="https://www.pierogi2000.com/2017/08/noncore-projector-at-the-boiler/"
                target="blank"
              >
                Read the full press release.
              </a>
            </p>
            <p>
              <strong>Tools:</strong> Processing, JavaScript, D3.js, HTML, CSS
            </p>
          </div>
        )}
      />
    </div>
  );
};
