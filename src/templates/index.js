import React from 'react';
import Script from 'react-load-script';
import ApplyWidget from '../components/ApplyWidget';

export default class IndexPage extends React.Component {
  _handleNetlifyLoad() {
    const { netlifyIdentity } = window;
    if (netlifyIdentity) {
      netlifyIdentity.on('init', (user) => {
        if (!user) {
          netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    netlifyIdentity.init();
  }

  render() {
    const {
      hero_heading: heading,
      hero_subheading: subheading,
      row_slides: rowSlides
    } = this.props.data.markdownRemark.frontmatter;

    return (<div className="index">
      <Script
        url="https://identity.netlify.com/v1/netlify-identity-widget.js"
        onLoad={() => this._handleNetlifyLoad()}
      />
      <div className="hero">
        <div className="hero__left">
          <h1>{heading}</h1>
          <p>{subheading}</p>
        </div>
        <div className="hero__right">
          <video src="/img/sather.webm" autoplay={'autoplay'} loop={'loop'}>
            <img src="/img/hexpp-9784.jpg" />
          </video>
        </div>
      </div>
      <ApplyWidget data={this.props.widgetMeta} />
      <div className="row__container">
        {rowSlides.map((row) => {
          return (<div className={`row row__${row.type}`}>
            <img src={row.img} />
            <p>{row.caption}</p>
            <p>
              <a href={row.link}>
                {row.link_text} &rarr;
              </a>
            </p>
          </div>);
        })}
      </div>
    </div>);
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    markdownRemark(frontmatter: { path: { eq: "/" } }) {
      html
      frontmatter {
        hero_heading
        hero_subheading
        row_slides {
          img
          caption
          link
          link_text
          type
        }
      }
    }
  }
`;
