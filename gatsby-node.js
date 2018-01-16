const path = require('path');

function checkError(result) {
  if (result.errors) {
    result.errors.forEach(e => console.error(e.toString()));
    return Promise.reject(result.errors);
  }
  return false;
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  let widgetMeta;
  return graphql(`query WidgetQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: {regex: "/.*-widget/g"}} }
    ) {
      edges {
        node {
          frontmatter {
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
    }
  }`).then((widgetInfo) => {
    const errors = checkError(widgetInfo);
    if (errors) return errors;
    widgetMeta = widgetInfo.data.allMarkdownRemark.edges.map(node => node.frontmatter);
    return graphql(`query PageQuery {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              templateKey
              path
            }
          }
        }
      }
    }`);
  }).then((result) => {
    const errors = checkError(result);
    if (errors) return errors;
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (!node.frontmatter.path) return;
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
        context: { widgets: widgetMeta }
      });
    });
  });
};
