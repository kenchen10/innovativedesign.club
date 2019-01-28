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
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>
          <script src="/pace.js"></script>
          <link href="/pace.css" rel="stylesheet" />



        </Helmet>

        <Navbar/>

        {this.props.location.pathname === "/" ?

          <div className="header__container">
            <img className="blob__left blob--green" src="img/sp19/blob.svg" />
            <img className="blob__right blob--green" src="img/sp19/blob.svg" />

            <div className="images__container images__container--left">
              <img id="brush" className="images--mobile" src="img/sp19/brush.png" />
              <img id="keyboard" className="images--mobile" src="img/sp19/keyboard.png" />
              <img id="wacom" className="images--mobile" src="img/sp19/wacom.png" />
              <img id="plant" className="images--mobile" src="img/sp19/plant.png" />
              <img id="headphones" src="img/sp19/headphones.png" />
            </div>

            <div className="images__container images__container--right">
              <img id="camera1" className="images--mobile" src="img/sp19/camera1.png" />
              <img id="marker1" className="images--mobile" src="img/sp19/marker1.png" />
              <img id="marker2" className="images--mobile" src="img/sp19/marker2.png" />
              <img id="ipad" src="img/sp19/ipad.png" />
              <img id="camera2" src="img/sp19/camera2.png" />
            </div>



            <div className="hero__container">
              <img width={300} src="/img/logo__fulltype.svg" />
              <h1>Your creative family at Cal</h1>
              <p>
                Innovative Design is UC Berkeley’s premier creative agency. We are designers, photographers, and web developers together in a mission to Make Berkeley Beautiful.
              </p>
              <div className="campaign_overlay__buttons">
                <Link to="/club" className="infosession__button infosession__button--grey">
                  See our work
                </Link>
                <Link to="/apply" className="infosession__button infosession__button--blue">
                  Apply to join us
                </Link>
              </div>
            </div>



          </div>

        : null
        }

        {this.props.location.pathname === "/lol" ?

          <div className="campaign_overlay__container campaign_overlay__container--spring19">
            <img width={100} src="/img/globes.png" />
            <h1>Innovative Design</h1>
            <h2>Graphic Design, Web Design, & Photography</h2>
            <div className="campaign_overlay__buttons">
              <Link to="/apply" className="infosession__button infosession__button--white">
                Apply now
              </Link>
            </div>

            <div className="learn_more--fall18">
              scroll down to learn more
            </div>
          </div>
        : null

      }




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
