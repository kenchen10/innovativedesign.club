import React from 'react';
import Hero from '../components/Hero';
import ApplyWidget from '../components/ApplyWidget';

export default class ClubPage extends React.Component {
  render() {
    return (<div className="club">
      <Hero data={this.props.data}>
        <div className="hero__right-cropped">
          <img src="/img/cmyk-9781.jpg" />
        </div>
      </Hero>
      <ApplyWidget data={this.props.widgetMeta} />
    </div>);
  }
}

export const pageQuery = graphql`
  query ClubQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        hero_heading
        hero_subheading
      }
    }
  }
`;
