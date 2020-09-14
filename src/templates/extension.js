import React from 'react';

import Hero from '../components/Hero';

export default class ExtensionPage extends React.Component {

  render () {

    return (
      <div className="club">
        <Hero data={this.props.data} />
        <div className="widget">
          <h2>What's IDUEP?</h2>
          <div>Launched in 2020, Innovative Design's University Extension Program is 
            an initiative started to extend our mission of bringing together creative
            individuals by collaborating, inspiring and educating one another.</div>
        </div>
        <div className={`team__block team__block-left`}>
          <div className="thumb">
            <img src="img/cmyk-9822.jpg" />
          </div>
          <div className="info">
            <h1>Incubation</h1>
            <p>We provide consulting and supplemental mentoring helping you create 
              an agency at an accredited university with a goal of being part our extensive 
              Innovative Design network.
            </p>
            <a href="https://innodatusc.webflow.io/#club" target="__blank">InnoD @ USC</a>
          </div>
        </div>
        <div className={`team__block team__block-right`}>
          <div className="thumb">
            <img src="img/hexpp-9784.jpg" />
          </div>
          <div className="info">
            <h1>Mentorship</h1>
            <p>Our mentorship program for already existing creative programs at 
              universities who want to revitalize their structure or find new ways 
              to keep their program engaging.
            </p>
          </div>
        </div>
        <div className={`team__block team__block-left`}>
          <div className="thumb">
            <img src="img/cmyk-9781.jpg" />
          </div>
          <div className="info">
            <h1>Quick Chats</h1>
            <p>Our Quick Chats program suits individuals who want industry insights 
              and/or general tips for recruiting for specific design-related positions. 
              After submitting a request, our team will pair you up with a fitting person 
              within the Innovative Design network for you to chat with. This service is 
              available to anyone on and off Berkeley's campus.
            </p>
          </div>
        </div>
        <div className="widget">
          <h2>Interested?</h2>
          <div>Fill out a quick form here and we will get back to you shortly!</div>
          <div>Form: <a href="https://airtable.com/shr8e5hXEocdghn5K" target="__blank">https://airtable.com/shr8e5hXEocdghn5K</a></div>
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query ExtensionQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        hero_heading
        hero_subheading
      }
    }
  }
`;
