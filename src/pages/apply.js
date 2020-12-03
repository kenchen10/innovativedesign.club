import React from 'react';
import Input from '../components/Input';
import Hero from '../components/Hero';

// TODO: Replace with DeCal source GraphQL
const apps = {
  officers: {
    officers: 'Officer Board Applications',
    advisors: 'Advisor Applications'
  },
  decals: {
    intro: 'Introduction to Photoshop and Illustrator',
    gdp: 'Graphic Design Principles',
    photo: 'Photography Principles'
  },
  club: {
    gold: 'Gold: Graphic Design Team',
    blue: 'Blue: Advanced Graphic Design Team',
    web: 'Web Team',
    photo: 'Photo Team',
    bluephoto: 'Blue: Photo Team'
  }
};

export default class Apply extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      types: {
        decals: {},
        club: {},
        officers: {},
      },
      error: '',
      links: {}
    };
  }

  componentDidMount() {
    let decalStatus;
    let clubStatus;
    let officerStatus;
    fetch('https://innod.lib.id/app-opens-api@release/officers/')
      .then(resp => resp.json())
      .then((data) => {
        officerStatus = data;
        return fetch('https://innod.lib.id/app-opens-api@release/decals/');
      })
      .then(resp => resp.json())
      .then((data) => {
        decalStatus = data;
        return fetch('https://innod.lib.id/app-opens-api@release/club/');
      })
      .then(resp => resp.json())
      .then((data) => {
        clubStatus = data;
        this.setState({
          loading: false,
          types: {
            decals: decalStatus,
            club: clubStatus,
            officers: officerStatus,
          },
          links: {
            ...clubStatus.links,
            ...decalStatus.links,
            ...officerStatus.links
          }
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          error: err.message
        });
      });
  }

  _onClick(app) {
    if (this.state.links[app]) {
      window.location = this.state.links[app];
    }
  }

  renderLinks(type) {
    if (type === 'club') {
      const links = this.state.links;
      return Object.keys(links).map((app) => {
        return (<div className="apply__box">
          <h3>
            {apps[type][app]}
            <button
              className="apply__button"
              onClick={() => this._onClick(app)}
            >
              Apply &rarr;
            </button>
          </h3>
        </div>);
      });
    } else {
      return Object.keys(apps[type]).map((app) => {
        return (<div className="apply__box">
          <h3>
            {apps[type][app]}
            <button
              className="apply__button"
              onClick={() => this._onClick(app)}
            >
              Apply &rarr;
            </button>
          </h3>
        </div>);
        });
    }
  }

  render() {
    let applicationComponents = {};
    let soonMessage = (<p className="apply__message-disabled">
      Applications opening soon
    </p>);
    let closedMessage = (<p className="apply__message-disabled">
      Applications have closed. Check back next semester!
    </p>);

    const types = Object.keys(this.state.types);
    for (let i = 0; i < types.length; i++) {
      const type = types[i];
      if (this.state.types[type].open) {
        applicationComponents[type] = this.renderLinks(type);
      } else if (this.state.types[type].closed) {
        applicationComponents[type] = closedMessage;
      } else if (this.state.error) {
        applicationComponents[type] = (<p>{this.state.error}</p>);
      } else {
        applicationComponents[type] = soonMessage;
      }
    }

    return (
      <div className="apply">
        <h1>Applications</h1>
        <div className="apply__section">
          <h2>Officer Board</h2>
          <p>Applications for all Officer positions open on Wednesday, December 2 at 8:30 PM and
          are due by Friday, December 4 at 11:59 PM.</p>
          {this.state.loading ?
            <img src="/img/loading.gif" width={100} /> :
            applicationComponents.officers
          }
        </div>
        <div className="apply__section">
          <h2>DeCals</h2>
          <p>Applications for all DeCals open on Saturday, August 29 at 5:00 PM PST and
          are due by September 4th at 11:59 PM.</p>
          {this.state.loading ?
            <img src="/img/loading.gif" width={100} /> :
            applicationComponents.decals
          }
        </div>
        <div className="apply__section">
          <h2>Club</h2>
          <p>All club applications open on Monday, September 7th.</p>
          <p>All applications are due Friday, September 11.</p>
          <p>Blue (Graphics/Photo) and Web Team applications require interviews on September 12th.</p>
          {this.state.loading ?
            <img src="/img/loading.gif" width={100} /> :
            applicationComponents.club
          }
        </div>
      </div>
    );

      // <div className="apply__section">
      //   <h2>Officer Board</h2>
      //   <p>Applications for all Officer positions open on Wednesday, April 23 at 9:00 PM and
      //   are due by Friday, April 26 at 11:59 PM.</p>
      //   {this.state.loading ?
      //     <img src="/img/loading.gif" width={100} /> :
      //     applicationComponents.officers
      //   }
      // </div>
      // <div className="apply__section">
      //   <h2>DeCals</h2>
      //   <p>Applications for all DeCals open on Monday, January 28 at 9:00 PM and
      //   are due by Friday, February 1 at 11:59 PM.</p>
      //   {this.state.loading ?
      //     <img src="/img/loading.gif" width={100} /> :
      //     applicationComponents.decals
      //   }
      // </div>
      // <div className="apply__section">
      //   <h2>Club</h2>
      //   <p>Blue Team applications are due on Friday, February 8 at 11:59 PM.</p>
      //   <p>Web Team applications are due on Friday, February 8 at 7:59 PM.</p>
      //   <p>Gold and Photo Team applications are due on Saturday, February 9 at 11:59 PM.</p>
      //   <p>Blue and Web Team applications require interviews; see application for details and scheduling.</p>
      //   {this.state.loading ?
      //     <img src="/img/loading.gif" width={100} /> :
      //     applicationComponents.club
      //   }
      // </div>
  }
}
