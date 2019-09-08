import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import DocumentTitle from 'react-document-title';
import { Helmet } from 'react-helmet';
import Link from 'gatsby-link';
import Navbar from '../components/Navbar';
import anime from "animejs";

import '../css/_index.scss';

const navbarHeight = 60;

export default class RootLayout extends React.Component {

  componentDidUpdate() {
    this.animateLandingPage();
  }

  componentDidMount() {
    this.animateLandingPage();

  }

  animateLandingPage() {
    if (window.innerWidth > 470) {
      anime({
        targets: ".images__container--left img",
        translateY: "50px",
        opacity: 1,
        delay: (_, index) => 300 + index * 100,
      });
      anime({
        targets: ".images__container--right img",
        translateY: "50px",
        opacity: 1,
        delay: (_, index) => 400 + index * 80,
      });
    } else {
      // var images_mobile = ReactDOM.findDOMNode(this).getElementsByClassName("images--mobile");
      // var images_mobile = React.Children.toArray(this.props.children).filter((item) => item.props.className === 'images--mobile')
      // for (var img in images_mobile) {
      //   img.style.width = "10%";
      // }

      anime({
        targets: ".images--mobile",
        translateY: 40,
        zoom: "45%",
        opacity: 1,
        delay: (_, index) => 400 + index * 80,
      });
    }
  }

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
            href="https://fonts.googleapis.com/css?family=Rakkas&display=swap" 
            rel="stylesheet"> 
          </link>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>
          <script src="/pace.js"></script>
          <link href="/pace.css" rel="stylesheet" />



        </Helmet>

        {this.props.location.pathname === "/" ?
          <div>
            <Navbar type="fa19"/>
            <div className="header__container">
              <div className="images__container images__container--left">
                <img id="web" className="images--mobile" src="img/fa19/laptop.png"/>
                <img id="hole" className="images--mobile" src="img/fa19/hole.png"/>
                <img id="camera-girl" className="images--mobile" src="img/fa19/camera-girl.png"/>
              </div>

              <div className="images__container images__container--right">
                <img id="hanging-person" className="images--mobile" src="img/fa19/hanging-person.png"/>
                <img id="lightbulb" className="images--mobile" src="img/fa19/lightbulb.gif"/>
                <img id="stairs" className="images--mobile" src="img/fa19/stairs.png"/>
              </div>

              <div className="hero__container">
                <img width={400} src="/img/fa19/innod-logo.svg" />
                <h1>Welcome Home.</h1>
                <p className="subtitle">Find your creative realm at Innovative Design.</p>
                <p>
                  Innovative Design is UC Berkeley’s premier creative agency. We are designers, photographers, and web developers together in a mission to Make Berkeley Beautiful.
                </p>
                <div className="campaign_overlay__buttons">
                  <Link to="/club" className="infosession__button infosession__button--grey">
                    See our work
                  </Link>
                  <Link to="/apply" className="infosession__button infosession__button--fa19">
                    Apply to join us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        : <Navbar/> }

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
