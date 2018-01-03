import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';

export const LOGO_TEXT = 'LOGO_TEXT';
export const LOGO_ICON = 'LOGO_ICON';

export default class Logo extends Component {
  render() {
    const svgToRender = this.props.logoType === LOGO_ICON ? (
      <svg
        x="0px"
        y="0px"
	      viewBox="0 0 317.1 512"
      >
        <g>
	        <path
            className={ classnames(this.props.logoClass) }
            d="M263.2,234.7c-26.7,35.3-69.1,58.2-116.8,58.2c-14,0-27.6-2-40.4-5.7c-5.4,12.9-8.3,27.1-8.3,42c0,4.4,0.3,8.7,0.8,12.9c3.7-0.5,7.5-0.8,11.3-0.8c47.1,0,85.3,38.2,85.3,85.3c0,3.9-0.3,7.7-0.8,11.4c4.3,0.5,8.6,0.8,13.1,0.8c60.6,0,109.7-49.1,109.7-109.7C317.1,288.9,295.5,253.8,263.2,234.7z"
          />
	        <path
            className={ classnames(this.props.logoClass) }
            d="M207.4,219.4c20.4,0,39.5,5.6,55.8,15.3c18.6-24.5,29.6-55.1,29.6-88.2C292.8,65.5,227.3,0,146.4,0C65.6,0,0,65.5,0,146.4c0,66.8,44.8,123.2,106,140.8C122.5,247.4,161.7,219.4,207.4,219.4z"
          />
          <path
            className={ classnames(this.props.logoClass) }
            d="M98.5,342.1c-41.8,5.5-74,41.3-74,84.6c0,47.1,38.2,85.4,85.4,85.4c43.3,0,79-32.2,84.6-73.9C144.1,432.1,104.4,392.3,98.5,342.1z"
          />
        </g>
      </svg>
    ) : (
      <svg
        x="0px"
        y="0px"
        viewBox="0 0 512 39.8"
      >
        <g>
        	<rect
            y="0.7"
            className={ this.props.logoClass }
            width="5.5"
            height="39.2"
          />
        	<path
            className={ this.props.logoClass }
            d="M37.6,39.8h5.5V14.4c0-2.2-0.4-5.7-0.4-5.7h0.1c0,0,1.8,3.6,3.3,5.7l17.5,25.4h5.4V0.7h-5.5v25.5c0,2.2,0.4,5.7,0.4,5.7h-0.1c0,0-1.8-3.6-3.3-5.7L43,0.7h-5.4V39.8z"
          />
        	<path
            className={ this.props.logoClass }
            d="M101,39.8h5.5V14.4c0-2.2-0.4-5.7-0.4-5.7h0.1c0,0,1.8,3.6,3.3,5.7L127,39.8h5.4V0.7h-5.5v25.5c0,2.2,0.4,5.7,0.4,5.7h-0.1c0,0-1.8-3.6-3.3-5.7L106.4,0.7H101V39.8z"
          />
        	<path
            className={ this.props.logoClass }
            d="M240.7,39.8h5.5l14.4-39.2h-5.8l-9.8,27.7c-0.7,2.1-1.5,5.4-1.5,5.4h-0.1c0,0-0.8-3.3-1.5-5.4l-9.7-27.7h-5.9L240.7,39.8z"
          />
        	<polygon
            className={ this.props.logoClass }
            points="348.3,39.8 353.8,39.8 353.8,5.4 367.2,5.4 367.2,0.7 334.9,0.7 334.9,5.4 348.3,5.4"
          />
        	<rect
            x="394.3"
            y="0.7"
            className={ this.props.logoClass }
            width="5.5" height="39.2"
          />
        	<path
            className={ this.props.logoClass }
            d="M441.3,39.8h5.5l14.4-39.2h-5.8l-9.8,27.7c-0.7,2.1-1.5,5.4-1.5,5.4H444c0,0-0.8-3.3-1.5-5.4l-9.7-27.7h-5.9L441.3,39.8z"
          />
        	<polygon
            className={ this.props.logoClass }
            points="488.3,39.8 512,39.8 512,35.1 493.8,35.1 493.8,22.5 507.8,22.5 507.8,17.7 493.8,17.7 493.8,5.4 511.1,5.4 511.1,0.7 488.3,0.7"
          />
        	<g>
        		<path
              className={ this.props.logoClass }
              d="M190.1,30.4c2.8,0,5.3,0.8,7.5,2.1c2.5-3.4,4-7.6,4-12.2c0-11.2-8.9-20.3-19.8-20.3c-10.9,0-19.8,9.1-19.8,20.3c0,9.3,6.1,17.1,14.3,19.5C178.6,34.3,183.9,30.4,190.1,30.4"
            />
        	</g>
        	<path
            className={ this.props.logoClass }
            d="M37.6,39.8h5.5V14.4c0-2.2-0.4-5.7-0.4-5.7h0.1c0,0,1.8,3.6,3.3,5.7l17.5,25.4h5.4V0.7h-5.5v25.5c0,2.2,0.4,5.7,0.4,5.7h-0.1c0,0-1.8-3.6-3.3-5.7L43,0.7h-5.4V39.8z"
          />
        	<path
            className={ this.props.logoClass }
            d="M101,39.8h5.5V14.4c0-2.2-0.4-5.7-0.4-5.7h0.1c0,0,1.8,3.6,3.3,5.7L127,39.8h5.4V0.7h-5.5v25.5c0,2.2,0.4,5.7,0.4,5.7h-0.1c0,0-1.8-3.6-3.3-5.7L106.4,0.7H101V39.8z"
          />
        	<path
            className={ this.props.logoClass }
            d="M240.7,39.8h5.5l14.4-39.2h-5.8l-9.8,27.7c-0.7,2.1-1.5,5.4-1.5,5.4h-0.1c0,0-0.8-3.3-1.5-5.4l-9.7-27.7h-5.9L240.7,39.8z"
          />
        	<g>
        		<path
              className={ this.props.logoClass }
              d="M305.5,28.6h-14.8l-3.9,11.3h-5.7l14.1-39.2h5.8l14.1,39.2h-5.7L305.5,28.6z M298.1,6c0,0-0.9,3.6-1.6,5.5L292.1,24H304l-4.3-12.4c-0.7-2-1.5-5.5-1.5-5.5H298.1z"
            />
        	</g>
        </g>
      </svg>
    );

    return (
      <div className="logo__svg">
        { svgToRender }
      </div>
    );
  }
}

Logo.propTypes = {
  logoType: PropTypes.string,
  logoClass: PropTypes.string,
};
