import React from 'react';
import Script from 'react-load-script';
import ApplyWidget from '../pages/ApplyWidget';

export default class IndexPage extends React.Component {
  _handleNetlifyLoad() {
    const { netlifyIdentity } = window;
    if (netlifyIdentity) {
      netlifyIdentity.on('init', (user) => {
        if (!user) {
          netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    netlifyIdentity.init();
  }

  render() {
    return (<div className="index">
      <Script
        url="https://identity.netlify.com/v1/netlify-identity-widget.js"
        onLoad={() => this._handleNetlifyLoad()}
      />
      <div className="hero">
        <div className="hero__left">
          <h1>Your creative family at Cal.</h1>
          <p>
            Innovative Design is UC Berkeley’s premier creative agency. 
            We are designers, photographers, and web developers together in 
            a mission to Make Berkeley Beautiful.
          </p>
        </div>
      </div>
      <ApplyWidget data={this.props.data} />
    </div>);
  }
}
