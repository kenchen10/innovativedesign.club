import React from 'react';
import Hero from '../components/Hero';

export default class Work extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <div className="work">
                <Hero data={this.props.data}/>
                <div className="page__wrapper">
                    <h1>Work</h1>
                </div>
            </div>
        );
    }
}

export const pageQuery = graphql`
  query WorkQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        hero_heading
        hero_subheading
      }
    }
  }
`;