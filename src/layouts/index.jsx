import React from 'react';
import $ from 'jquery';
import DocumentTitle from 'react-document-title';
import { Helmet } from 'react-helmet';
import Link from 'gatsby-link';
import Navbar from '../components/Navbar';

import '../css/_index.scss';

const navbarHeight = 60;

export default class RootLayout extends React.Component {
  render() {
    return (
      <DocumentTitle title='Innovative Design'>
      <div className="root">
        <Helmet>
          <meta
            name="description"
            content="Cal's student run creative agency, on a mission to make Berkeley beautiful."
          />
          <meta
            name="keywords"
            content="innovative, design, innovative design, college, berkeley, design club, design organization, professional serfices, berkeley design club, innod, innod at cal, make berkeley beautiful"
          />
          <meta
            property="og:image"
            content="http://innovativedesign.club/img/Logo.png"
          />
          <meta
            property="og:title"
            content="Innovative Design"
          />
          <meta
            property="og:type"
            content="website" />
          <meta
            property="og:url"
            content="http://innovativedesign.club"
          />
          <link
            rel="icon"
            type="img/png"
            href='/img/Logo.png'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Lato:400,400italic,700'
            rel='stylesheet'
            type='text/css'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Open+Sans'
            rel='stylesheet'
            type='text/css'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,700,800,900'
            rel='stylesheet'
            type='text/css'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Fira+Sans:400,300,300italic,400italic,500,500italic,700,700italic'
            rel='stylesheet'
            type='text/css'
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
          />
          <script src="/pace.js"></script>
          <link href="/pace.css" rel="stylesheet" />
        </Helmet>

        {this.props.location.pathname === "/" ?
          <div>Hi
          </div>
          // <div className="campaign_overlay__container campaign_overlay__container--fall18">
          //   <div className="clouds--fall18"></div>
          //   <img width={182} src="/img/balloons.png" />
          //   <h1>10 years of making Berkeley beautiful</h1>
          //   <div className="campaign_overlay__buttons">
          //     <Link to="/apply" className="infosession__button infosession__button--yellow">
          //       Apply now
          //     </Link>
          //   </div>
          //   <div className="learn_more--fall18">
          //     <img src="/img/mountains-down.png" className="mountains--fall18" />
          //   </div>
          // </div>
        : null

        }

        <Navbar />
        <div className="content">
          { this.props.children({ ...this.props, widgetMeta: this.props.data }) }
        </div>
      </div>
    </DocumentTitle>
    )
  }
}

export const pageQuery = graphql`
  query WidgetMetaQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: {regex: "/.*-widget/g"}} }
    ) {
      edges {
        node {
          frontmatter {
            apply_message
            apply_types {
              apply_deadline
              apply_link
              description
              status
              heading
              infosession
              linked_page
            }
          }
        }
      }
    }
  }
`;
