import React from 'react';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';

export default class Footer extends React.Component {
  render() {
    return <div className="nav__item nav__media">
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
  }
}
