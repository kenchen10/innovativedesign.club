import React from 'react';

import Hero from '../components/Hero';

export default class WatchPage extends React.Component {

  render () {
    const {
      groups
    } = this.props.data.markdownRemark.frontmatter;

    return (
      <div className="watch">
        <Hero data={this.props.data} />
        <div className="apply">
          {groups.map(group => {
            return (
              <div className="apply__section">
                <h2>{group.heading}</h2>
                <p>{group.description}</p>
                <p>{group.linked_page}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query WatchQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        hero_heading
        hero_subheading
        groups {
          heading
          description
          linked_page
        }
      }
    }
  }
`;
