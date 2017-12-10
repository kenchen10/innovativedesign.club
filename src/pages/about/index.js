import React from 'react';
import DocumentTitle from 'react-document-title';

import $ from 'jquery';
import _ from 'lodash';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render () {

    const officers = [
      {
        name: 'David Xie',
        tagline: '🌓 🌔 🌝 🌖 🌗',
        title: 'President',
        photo: '/img/officers/Xie.jpg'
      },
      {
        name: 'Nicholas Chiu',
        tagline: 'australian out of water',
        title: 'President',
        photo: '/img/officers/Nick.jpg'
      },
      {
        name: 'Jackie Xu',
        tagline: 'who cares about your feed\'s aesthetic',
        title: 'Photo Services',
        tier: '',
        photo: '/img/officers/JackieXu.jpg'
      },
      {
        name: 'Elizabeth Zhou',
        tagline: 'they call me ice bear',
        title: 'Design Services',
        tier: '',
        photo: '/img/officers/ElizabethZhou.jpg'
      },
      {
        name: 'Ashley Chen',
        tagline: 'I love fries so much I can eat them for all three meals a day',
        title: 'Finance',
        tier: '',
        photo: '/img/officers/Ashley.jpg'
      },
      {
        name: 'Julie Wong',
        tagline: 'Vanilla ice cream is the best ice cream',
        title: 'Gold Team Leader',
        tier: '',
        photo: '/img/officers/Julie.jpg'
      },
      {
        name: 'Essie Xu',
        tagline: 'A sad Berkeley student ',
        title: 'Publicity',
        tier: '',
        photo: '/img/officers/Essie.jpg'
      },
      {
        name: 'Christine Le',
        tagline: '(not pictured: a fat slice of pizza)',
        title: 'Intro Decal Facilitator',
        tier: '',
        photo: '/img/officers/ChristineLe.jpg'
      },
      {
        name: 'Jonathan Yang',
        tagline: 'usher\'s love in this club changed my life',
        title: 'External',
        tier: '',
        photo: '/img/officers/JonYang.jpg'
      },
      {
        name: 'Ellen Hong',
        tagline: 'hamilton & b l a c k m i r r o r',
        title: 'Admin',
        tier: '',
        photo: '/img/officers/Ellen.jpg'
      },
      {
        name: 'David Nguyen',
        tagline: 'accepting offerings of chinese express and beverages',
        title: 'Internal',
        tier: '',
        photo: '/img/officers/Eggboy.jpg'
      },
      {
        name: 'Andrew Chang',
        tagline: 'I live for memes puns and food',
        title: 'Photo Decal Facilitator',
        tier: '',
        photo: '/img/officers/AndrewChang.jpg'
      },
      {
        name: 'Charley Huang',
        tagline: 'not your average white girl',
        title: 'Education',
        tier: '',
        photo: '/img/officers/Charley.jpg'
      },
      {
        name: 'Soph Li',
        tagline: 'gazer of stars, chaser of sunlight, picker of blackberries',
        title: 'Internal',
        tier: '',
        photo: '/img/officers/Soph.jpg'
      },
      {
        name: 'Brandon Fang',
        tagline: 'living abundantly',
        title: 'Education',
        tier: '',
        photo: '/img/officers/Brandon.jpg'
      },
      {
        name: 'Peter Qiu',
        tagline: '🎶',
        title: 'Tech',
        photo: '/img/officers/Peter.jpg'
      },
      {
        name: 'Andrew Wang',
        tagline: 'Don\'t don\'t follow me on instagram @ndrewwang',
        title: 'Photo Decal Facilitator',
        tier: '',
        photo: '/img/officers/AndrewWang.jpg'
      },
      {
        name: 'Jessica Kwon',
        tagline: 'i like turtles',
        title: 'Gold Team Leader',
        tier: '',
        photo: '/img/officers/JKwon.jpg'
      },
      {
        name: 'Kiana Aryan',
        tagline: 'lil kiki from 217',
        title: 'Intro Decal Facilitator',
        tier: '',
        photo: '/img/officers/Kiana.jpg'
      },
      {
        name: 'Jackie Zou',
        tagline: 'witch@berkeley.edu',
        title: 'Marketing',
        tier: '',
        photo: '/img/officers/JackieZou.jpg'
      },
      {
        name: 'Margaret Zhou',
        tagline: 'Soft crunches of the forest carpet and blurred readings of a beautiful design.',
        title: 'Intro Decal Facilitator',
        tier: '',
        photo: '/img/officers/Margie.jpg'
      },
      {
        name: 'Barbara Yang',
        tagline: 'flamin hot cheetos in a bonne maman jar',
        title: 'External',
        tier: '',
        photo: '/img/officers/Barbs.jpg'
      },
      {
        name: 'Sascha Koller',
        tagline: '🔩',
        title: 'Recollections',
        tier: '',
        photo: '/img/officers/Sascha.jpg'
      },
      {
        name: 'Jeffrey Shi',
        tagline: 'Ito En teas, esoteric movies, and good ol\' fashioned home cooking.',
        title: 'Advisor',
        tier: '',
        photo: '/img/officers/JeffShi.jpg'
      },
      {
        name: 'Roya Chagnon',
        tagline: 'Urbanism, hawaiian shirts, & chocolate chip cookies',
        title: 'Intro Decal Facilitator',
        tier: '',
        photo: '/img/officers/Roya.jpg'
      },
      {
        name: 'Yudi Sun',
        tagline: 'yudi moon',
        title: 'Advisor',
        tier: '',
        photo: '/img/officers/Yudi.jpg'
      },
      {
        name: 'Luke Larson',
        tagline: 'Hard to spot in a snowstorm',
        title: 'Intro Decal Facilitator',
        photo: '/img/officers/Luke.jpg'
      },
      {
        name: 'David Bui',
        tagline: 'Everything In Its Right Place',
        title: 'Marketing',
        photo: '/img/officers/bui.jpg'
      }
    ];

    const officerElements = _.map(officers, (person, index) => {
      return (
        <div
          key={ `personElem-${index}` }
          className="officer"
        >
          <div className="officer__photo">
            <img
              src={person.photo}
            />
          </div>
          <div className="officer__overlay officer__overlay--left"></div>
          <div className="officer__overlay officer__overlay--right"></div>
          <div className="officer__details">
            <div className="officer__detail--name">
              { person.name }
            </div>
            <div className="officer__detail--tagline">
              <i>{ person.tagline }</i>
            </div>
            <div className="officer__detail--title">
              { person.title }
            </div>
            <div className="officer__detail--tier">
              { person.tier }
            </div>
          </div>
        </div>
      );
    });

    return (
      <DocumentTitle title="Innovative Design">
        <div>
          <div className="page__wrapper about">
            <h1 className="section__title">
              Teams
            </h1>
            <div className="icons__container">
              <div
                className="icon blue"
                style={{ backgroundImage: `url('/img/tiers/blue.png')` }}
              ></div>
              <div
                className="icon gold"
                style={{ backgroundImage: `url('/img/tiers/gold.png')` }}
              ></div>
              <div
                className="icon photo"
                style={{ backgroundImage: `url('/img/tiers/photo.png')` }}
              ></div>
              <div
                className="icon web"
                style={{ backgroundImage: `url('/img/tiers/web.png')` }}
              ></div>
            </div>
            <div className="info__container--icons">
              <p>
                Innovative Design has four teams that students can apply to be a member on: Blue, Gold, Photo, and Web.
              </p>
              <p>
                There are two design teams, Gold and Blue Team.  <b>Blue Team</b> is a group of intermediate to advanced designers
                that offers design services to off-campus groups while <b>Gold Team</b> offers graphic design education
                and experience for beginner to intermediate designers to on-campus groups.
              </p>
              <p>
                <b>Photo Team</b> is a hands-on experience in shooting professional headshots, event photography, stock photos and more.
              </p>
              <p>
                <b>Web Team</b> works for clients that are in need of technical help in designing their websites.
                Team members learn new skills and put existing knowledge to use through hands-on experience.
              </p>
            </div>
            <h1 className="section__title">
              officers
            </h1>
            <div className="officers">
              { officerElements }
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
