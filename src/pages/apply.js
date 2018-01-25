import React from 'react';
import Input from '../components/Input';
import Hero from '../components/Hero';

// TODO: Replace with DeCal source GraphQL
const courses = {
  intro: 'Introduction to Photoshop and Illustrator',
  gdp: 'Graphic Design Principles',
  photo: 'Photography Principles'
};

export default class Apply extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      open: false,
      closed: false,
      error: '',
      links: {}
    };
  }

  componentDidMount() {
    fetch('https://luz22jwsil4w.runkit.sh/status')
      .then(resp => resp.json())
      .then((data) => {
        const { open, closed, links } = data;
        this.setState({
          open,
          closed,
          links,
          loading: false
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          error: err.message
        });
      });
  }

  _onClick(course) {
    if (courses[course] && this.state.links[course]) {
      window.location = this.state.links[course];
    }
  }

  render() {
    let applications;
    let soonMessage = (<p className="apply__message-disabled">
      Applications opening soon
    </p>);
    let closedMessage = (<p className="apply__message-disabled">
      Applications have closed. Check back next semester!
    </p>);

    if (this.state.open) {
      applications = Object.keys(courses).map((course) => {
        return (<div className="apply__box">
          <h3>
            {courses[course]}
            <button
              className="apply__button"
              onClick={() => this._onClick(course)}
            >
              Apply &rarr;
            </button>
          </h3>
        </div>);
      });
    } else if (this.state.closed) {
      applications = closedMessage;
    } else if (this.state.error) {
      applications = (<p>{this.state.error}</p>);
    }else {
      applications = soonMessage;
    }

    return (<div className="apply">
      <h1>Applications</h1>
      <div className="apply__section">
        <h2>DeCals</h2>
        <p>Applications for all DeCals open on Wednesday, January 24 at 9:00 PM and 
        are due by Saturday, January 27 at 11:59 PM.</p> 
        {this.state.loading ? 
          <img src="/img/loading.gif" width={100} /> : 
          applications
        }
      </div>
      <div className="apply__section">
        <h2>Club</h2>
        {soonMessage}
      </div>
    </div>);
  }
}
