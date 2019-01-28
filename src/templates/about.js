import React from 'react';
import Hero from '../components/Hero';
import Officer from '../components/Officer';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render () {
    const { officers } = this.props.data.markdownRemark.frontmatter;
    const images = this.props.data.allFile.edges.reduce((obj, edge) => {
      if (!edge.node.childImageSharp) return obj;
      const resolutions = edge.node.childImageSharp.resolutions;
      obj[resolutions.originalName] = resolutions;
      return obj;
    }, {});

    return (
      <div className="about">
        <Hero data={this.props.data} />
        <div className="officer__container">
          {officers.map((officer) => {
            const originalName = officer.image.substring(officer.image.lastIndexOf('/') + 1);
            return (<Officer
              info={officer}
              image={images[originalName]}
            />);
          })}
          {
            Array(6 - officers.length % 6).fill(0).map(() =>
              <div className="officer__block officer__block-empty" />
            )
          }
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query AboutQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        hero_heading
        hero_subheading
        officers {
          name
          role
          image
          hover_blurb
        }
      }
    }
    allFile {
      edges {
        node {
          childImageSharp {
            resolutions(
              traceSVG: {
                color: "lightgray"
                optTolerance: 0.4
                turdSize: 100
                turnPolicy: TURNPOLICY_MAJORITY
              },
              width: 150,
              height: 219,
              quality: 100,
              cropFocus: CENTER
            ) {
              width
              height
              src
              srcSet
              tracedSVG
              originalName
            }
          }
        }
      }
    }
  }
`;
