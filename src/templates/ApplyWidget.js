import React from 'react';

export default class ApplyWidget extends React.Component {
  render() {
    console.log(this.props);
    const data = this.props.data.markdownRemark.frontmatter;
    return (<p>
      {data.apply_message}
    </p>);
  }
}

export const pageQuery = graphql`
  query ApplyWidgetQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "apply-widget"}}) {
      frontmatter {
        apply_message
        apply_types {
          apply_deadline
          apply_link
          description
          heading
          infosession
          linked_page
        }
      }
    }
  }
`;
