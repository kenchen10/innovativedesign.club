import React from 'react';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';
import Headroom from 'react-headroom';
import classNames from 'classnames';
import $ from 'jquery';
import DocumentTitle from 'react-document-title';
import { Helmet } from 'react-helmet';

import '../css/_index.scss';

const navbarHeight = 60;

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };

    this._handleHamburger = this._handleHamburger.bind(this);
  }

  _handleHamburger(e) {
    e.preventDefault();
    this.setState({
      navOpen: !this.state.navOpen
    });
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
        </Helmet>
        <Headroom
          wrapperStyle={{
            maxHeight: navbarHeight
          }}
          style={{
            background: 'rgba(255, 255, 255, 0.99)'
          }}
        >
          <div
            className={classNames("nav", {
              "nav--open": this.state.navOpen
            })}
          >
            <div className="nav__wrapper">
              <Link className="nav__item nav__logo" to='/'>
                <img src='/img/logo-icon.png'/>
              </Link>
              <div
                className={classNames("nav__item", "nav__hamburger", {
                  "nav__hamburger--active": this.state.navOpen
                })}
                onClick={this._handleHamburger}
              >
                <div className="hamburger__bar bar--1"></div>
                <div className="hamburger__bar bar--2"></div>
              </div>
              <Link className="nav__item nav__cta" to='/requests/'>
                requests
              </Link>
              <div className="nav__item nav__media">
                <a href="https://www.facebook.com/InnovativeDesignUCB/" target="_blank">
                  <FontAwesome
                    className="media__icon fb"
                    name="facebook"
                  />
                </a>
                <a href="https://twitter.com/innodatcal" target="_blank">
                  <FontAwesome
                    className="media__icon twitter"
                    name="twitter"
                  />
                </a>
                <a href="https://www.instagram.com/innodatcal/" target="_blank">
                  <FontAwesome
                    className="media__icon ig"
                    name="instagram"
                  />
                </a>
              </div>
              <Link className="nav__item nav__link" to='/about'>
                about
              </Link>
              <Link className="nav__item nav__link" to='/events/'>
                events
              </Link>
              <Link className="nav__item nav__link" to='/decal/'>
                decals
              </Link>
            </div>
          </div>
        </Headroom>
        <div className="content">
          { this.props.children() }
        </div>
      </div>
    </DocumentTitle>
    )
  }
}

