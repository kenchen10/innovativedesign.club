import React from 'react';
import Hero from '../components/Hero';
import ApplyWidget from '../components/ApplyWidget';

export default class ClubPage extends React.Component {
  render() {
    const {
      teams
    } = this.props.data.markdownRemark.frontmatter;
    const image = (team) => (<div className="left"></div>);
    const infoBlock = (team) => {
      return (<div className="right">
        <h1>{team.name}</h1>
        <p>{team.description}</p>
      </div>);
    };

    return (<div className="club">
      <Hero data={this.props.data}>
        <div className="hero__right-cropped">
          <img src="/img/cmyk-9781.jpg" />
        </div>
      </Hero>
      <ApplyWidget data={this.props.widgetMeta} />
      {teams.map((team, i) => {
        const direction = i % 2 == 0 ? 'left' : 'right';
        return (<div className={`team__block team__block-${direction}`}>
          <div className="thumb">
            <img src={team.image} />
          </div>
          <div className="info">
            <h1>{team.name}</h1>
            <p>{team.description}</p>
          </div>
        </div>);
      })}
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
        teams {
          name
          description
          image
        }
      }
    }
  }
`;
