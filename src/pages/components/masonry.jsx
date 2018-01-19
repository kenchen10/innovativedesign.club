import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router';
import classNames from 'classnames';

const bottomOffset = 70;

const imgOrder = [
  {
    path: "/img/portfolio/logos_innod-1.jpg",
    description: "Logo and Branding for Uproot"
  },
  {
    path: "/img/portfolio/logos_innod-2.jpg",
    description: "Illustrations for Cal Day"
  },
  {
    path: "/img/portfolio/logos_innod-3.jpg",
    description: "Logo Project for Cal Coptics"
  },
  {
    path: "/img/portfolio/logos_innod-15.jpg",
    description: "UC Berkeley Holi Festival"
  },
  {
    path: "/img/portfolio/logos_innod-4.jpg",
    description: "Organizing RGB 2017 Speaker Series"
  },
  {
    path: "/img/portfolio/logos_innod-13.jpg",
    description: "Website for Art History Department"
  },
  {
    path: "/img/portfolio/logos_innod-5.jpg",
    description: "Logo for ASUC Office of the CTO"
  },
  {
    path: "/img/portfolio/logos_innod-6.jpg",
    description: "Logo Project for Berkeley Basic Needs"
  },
  {
    path: "/img/portfolio/logos_innod-7.jpg",
    description: "T-shirt Design for Barbell Club at Berkeley"
  },
  {
    path: "/img/portfolio/logos_innod-8.jpg",
    description: "Logo for Student Yoga Collective"
  },
  {
    path: "/img/portfolio/logos_innod-16.jpg",
    description: "UC Berkeley Holi Festival"
  },
  {
    path: "/img/portfolio/logos_innod-14.jpg",
    description: "Website for Berkeley Association for India's Development"
  },
  {
    path: "/img/portfolio/logos_innod-9.jpg",
    description: "Halloween Cards 2016"
  },
  {
    path: "/img/portfolio/logos_innod-10.jpg",
    description: "Logo for Berkeley Starcraft"
  },
  {
    path: "/img/portfolio/logos_innod-11.jpg",
    description: "Logo for Kylin Law"
  },
  {
    path: "/img/portfolio/logos_innod-12.jpg",
    description: "Promo Materials for Cal Quidditch"
  },
  {
    path: "/img/portfolio/logos_innod-17.jpg",
    description: "Portraits for Cal Hawaii Club"
  }
]

export default class MasonryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      divs: [],
      count: 0,
      open: false
    }

    this._handleScroll = this._handleScroll.bind(this);
    this.generate = this.generate.bind(this);
  }

  generate(key, path, description)  {
    return (
      <div key={key} className="grid-item">
        <div className="img__container">
          <img src={path} />
          <div className="img__overlay"/>
          <div className="img__text"> <span>{description}</span> </div>
        </div>
      </div>
    );
  };

  componentDidMount() {
    window.addEventListener("scroll", this._handleScroll);

    const divs = []

    for (let i = 0; i < 6; i += 1) {
      divs.push(this.generate(i, imgOrder[i].path, imgOrder[i].description))
    }

    // extra setState because of formatting issues initially
    this.setState({
      divs: divs,
      count: 6
    }, () => {
      this.setState({
        divs: this.state.divs.concat(this.generate(6, imgOrder[this.state.count].path, imgOrder[this.state.count].description)),
        count: this.state.count + 1
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._handleScroll);
  }

  _handleScroll(e) {
    if (this.state.count < 17) {
      var d = document.documentElement;
      var offset = d.scrollTop + window.innerHeight;
      var height = d.offsetHeight;
      var scrolly = window.scrollY;
      if (scrolly >= height - offset) {
        for (let i = 0; i < 4; i += 1) {
          if (this.state.count < 17) {
            this.setState({
              divs: this.state.divs.concat([
                <div key={this.state.count} className="grid-item">
                  <div className="img__container">
                    <img src={imgOrder[this.state.count].path} />
                    <div className="img__overlay"/>
                    <div className="img__text"> <span>{imgOrder[this.state.count].description}</span> </div>
                  </div>
                </div>]),
              count: this.state.count + 1
            });
          }
        }
      }
    }
  }

  render() {
    const options = {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true,
    }

    return (
        <div className="masonry--container">
            <Masonry options={options} updateOnEachImageLoad={true}>
                <div className="grid-sizer"></div>
                <div className="grid-item hero">
                  <div className="img__container">
                    <a href="https://www.facebook.com/pg/InnovativeDesignUCB/events/">
                      <img src="/img/portfolio/hero.png"/>
                    </a>
                  </div>
                </div>
                <div className="grid-item intro">
                    <span>Innovative Design</span> is a family of graphic designers, web designers, and photographers at the University of California, Berkeley. 
                    We are creative individuals who are continuously evolving by collaborating, inspiring and educating one another.
                    <br />
                    <br />
                    Scroll down to view a selection of our work. 
                </div>
                <div className="content__container">
                  {this.state.divs}
                </div>
            </Masonry>
        </div>
    )
  }
}
