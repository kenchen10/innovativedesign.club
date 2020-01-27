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
  constructor(props) {
    super(props);

    this.limit = 35;
    this.particles = [];
    this.autoAddParticle = false;
    this.sizes = [15, 20, 25, 35, 45];
    this.variants = [
      '🍅'
    ];
  }

  componentDidUpdate() {
    this.animateLandingPage();
  }

  componentDidMount() {
    this.height = document.documentElement.clientHeight;
    this.animateLandingPage();
    this.mobileHelper();
    this.addHandlers();
    this.loop();
  }

  mobileHelper() {
    document.addEventListener("touchstart", function(){}, true);
  }

  loop() {
    if (this.autoAddParticle && this.particles.length < this.limit) {
      this.createParticle();
    }

    this.updateParticles();

    requestAnimationFrame(this.loop.bind(this));
  }

  addHandlers() {
    const isTouchInteraction = 'ontouchstart' in window || navigator.msMaxTouchPoints;

    const tap = isTouchInteraction ? 'touchstart' : 'mousedown';
    const tapEnd = isTouchInteraction ? 'touchend' : 'mouseup';
    const move = isTouchInteraction ? 'touchmove' : 'mousemove';

    document.addEventListener(move, (e) => {
      this.mouseX = e.pageX || e.touches[0].pageX;
      this.mouseY = e.pageY || e.touches[0].pageY;
    }, {passive: false});

    document.addEventListener(tap, (e) => {
      this.mouseX = e.pageX || e.touches[0].pageX;
      this.mouseY = e.pageY || e.touches[0].pageY;
      this.autoAddParticle = true;
    });

    document.addEventListener(tapEnd, () => {
      this.autoAddParticle = false;
    });

    document.addEventListener('mouseleave', () => {
      this.autoAddParticle = false;
    });
  }

  createParticle() {
    const size = this.sizes[Math.floor(Math.random() * this.sizes.length)];
    const speedHorz = Math.random() * 10;
    const speedUp = Math.random() * 25;
    const spinVal = Math.random() * 360;
    const spinSpeed = ((Math.random() * 35)) * (Math.random() <= .5 ? -1 : 1);
    const top = (this.mouseY - size / 2);
    const left = (this.mouseX - size / 2);
    const direction = Math.random() <= .5 ? -1 : 1;

    const particle = document.createElement('span');
    particle.innerHTML = this.variants[Math.floor(Math.random() * this.variants.length)];
    particle.classList.add('particle');

    particle.setAttribute("style", `
      font-size: ${size}px;
      top: ${top}px;
      left: ${left}px;
      transform: rotate(${spinVal}deg);
    `);

    document.getElementById("root").appendChild(particle);
    console.log(particle);

    this.particles.push({
      element: particle,
      size,
      speedHorz,
      speedUp,
      spinVal,
      spinSpeed,
      top,
      left,
      direction,
    });
  }

  updateParticles() {
    this.particles.forEach((p) => {
      p.left = p.left - (p.speedHorz * p.direction);
      p.top = p.top - p.speedUp;
      p.speedUp = Math.min(p.size, p.speedUp - 1);
      p.spinVal = p.spinVal + p.spinSpeed;

      if (p.top >= this.height + p.size) {
        this.particles = this.particles.filter((o) => o !== p);
        p.element.remove();
      }

      p.element.setAttribute("style", `
        top: ${p.top}px;
        left: ${p.left}px;
        font-size: ${p.size}px;
        transform:rotate(${p.spinVal}deg);
      `);
    });
  }

  animateLandingPage() {
    if (window.innerWidth > 470) {
      anime({
        targets: ".images__container--left img",
        translateX: "50px",
        opacity: 1,
        delay: (_, index) => 300 + index * 100,
      });
      anime({
        targets: ".images__container--right img",
        translateX: "-50px",
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
        translateY: "40px",
        // zoom: "45%",
        opacity: 1,
        delay: (_, index) => 400 + index * 80,
      });
    }

    // heading
    anime({
      targets: ".hero__container .bubble-upper",
      scale: [0, 1],
      opacity: [0, 1],
      delay: (_, index) => 500,
      duration: 600,
      easing: 'easeInOutCubic',
    });

    anime({
      targets: ".hero__container .heading #weird",
      translateX: [-150, 0],
      translateY: [30, 0],
      opacity: [0, 1],
      delay: (_, index) => 1200,
    });

    anime({
      targets: ".hero__container .heading #wacky",
      translateX: [150, 0],
      translateY: [-30, 0],
      opacity: [0, 1],
      delay: (_, index) => 1700,
    });

    anime({
      targets: ".hero__container .heading #creative",
      translateX: [-150, 0],
      translateY: [30, 0],
      opacity: [0, 1],
      delay: (_, index) => 2200,
    });

    anime({
      targets: ".hero__container .bubble-lower",
      scale: [0, 1],
      opacity: [0, 1],
      delay: (_, index) => 2400,
      duration: 600,
      easing: 'easeInOutCubic',
    });
  }

  render() {
    return (
      <DocumentTitle title='Innovative Design'>
      <div id="root" className="root">
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
            <Navbar type="sp20" />
            <div className="header__container">
              <div className="images__container images__container--left">
                <img id="camera" className="images--mobile" src="img/sp20/camera.png"/>
                <img id="laptopguy" className="images--mobile" src="img/sp20/laptopguy.png" />
                <img id="blob2" className="images--mobile" src="img/sp20/blob2.png"/>
              </div>

              <div className="images__container images__container--right">
                <img id="blob3" className="images--mobile" src="img/sp20/blob3.png"/>
                <img id="pentoolguy" className="images--mobile" src="img/sp20/pentoolguy.png"/>
                <img id="panel" className="images--mobile" src="img/sp20/panel.png"/>
                <img id="leg" className="images--mobile" src="img/sp20/leg.png"/>
              </div>

              <div className="hero__container">
                <div className="heading-wrapper">
                  <div className="bubble-upper">
                    <img width={440} src="/img/sp20/bubble-upper.png" />
                  </div>
                  <div className="heading">
                    <img id="weird" width={440} src="/img/sp20/weird.png" />
                  </div>
                  <div className="heading">
                    <img id="wacky" width={440} src="/img/sp20/wacky.png" />
                  </div>
                  <div className="heading">
                    <img id="creative" width={440} src="/img/sp20/creative.png" />
                  </div>
                  <div className="bubble-lower">
                    <img width={440} src="/img/sp20/bubble-lower.png" />
                  </div>
                </div>
                {/* <img width={400} src="/img/sp20/call-to-action.png" /> */}
                <p>
                  Innovative Design is UC Berkeley’s premier creative agency. We are designers, photographers, and web developers together in a mission to Make Berkeley Beautiful.
                </p>
                <div className="campaign_overlay__buttons">
                  <Link to="/club" className="infosession__button infosession__button--grey">
                    See our work
                  </Link>
                  <Link to="/apply" className="infosession__button infosession__button--sp20">
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
