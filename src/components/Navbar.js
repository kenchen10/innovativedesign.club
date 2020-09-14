import React from 'react';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';

// TODO: Replace with Gatsby source
// , {
//   name: 'Resources',
//   slug: 'resources',
// }, {
//   name: 'Contact',
//   slug: 'contact',
// }
const PAGES = [
{
  name: 'Club',
  slug: 'club'
}, {
  name: 'DeCals',
  slug: 'decals'
}, {
  name: 'Our Team',
  slug: 'about'
}, {
  name: 'Extension',
  slug: 'extension'
}
];

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };

    this._handleHamburger = ::this._handleHamburger;
  }

  _handleHamburger(e) {
    if (e) e.preventDefault();
    this.setState({
      navOpen: !this.state.navOpen
    });
  }

  render() {
    const { type } = this.props;
    if (type === 'sp20') {
      return (
        <div
          className={classNames("nav", "sp20", {
            "nav--open": this.state.navOpen
          })}
        >
          <div className="nav__wrapper">
            <Link className="nav__item nav__logo sp20" to='/'>
              <img src="/img/logo__icon--blue.svg"/>
            </Link>
            <div
              className={classNames("nav__item", "nav__hamburger", "sp20", {
                "nav__hamburger--active": this.state.navOpen
              })}
              onClick={this._handleHamburger}
            >
              <div className="hamburger__bar--sp20 bar--1"></div>
              <div className="hamburger__bar--sp20 bar--2"></div>
            </div>
            <div className="nav__links">
              {PAGES.map((page) => {
                return (
                  <Link
                    className="nav__item nav__link sp20"
                    to={`/${page.slug}`}
                    onClick={() => this._handleHamburger()}
                    key={page.slug}
                  >
                    {page.name}
                  </Link>
                );
              })}
              <Link className="nav__item nav__cta sp20" to='/requests/'>
                Submit a Request
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={classNames("nav", {
            "nav--open": this.state.navOpen
          })}
        >
          <div className="nav__wrapper">
            <Link className="nav__item nav__logo" to='/'>
              <img src="/img/logo__icon.svg"/>
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
            <div className="nav__links">
              {PAGES.map((page) => {
                return (
                  <Link
                    className="nav__item nav__link"
                    to={`/${page.slug}`}
                    onClick={() => this._handleHamburger()}
                    key={page.slug}
                  >
                    {page.name}
                  </Link>
                );
              })}
              <Link className="nav__item nav__cta" to='/requests/'>
                Submit a Request
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}
