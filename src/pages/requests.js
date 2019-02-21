import React from 'react';
import classNames from 'classnames';
import DatePicker from 'react-datepicker';
import DocumentTitle from 'react-document-title';
import Dropdown from 'react-dropdown';
import MaskedInput from 'react-maskedinput';
import moment from 'moment';

import Link from 'gatsby-link';
import Input from '../components/Input';

import $ from 'jquery';
import _ from 'lodash';

import 'react-datepicker/dist/react-datepicker.css';

const fields = [
  'name',
  'email',
  'phone',
  'organization',
  'description',
  'campus',
  'type',
  'deadline',
  'project',
  'questions'
];

const campusTypes = [
  'On campus, as a registered student organization',
  'On campus, as a university program',
  'Off campus'
];

const projectTypes = [
  'Graphic Design',
  'Photography',
  'Web Design'
];

const googleFormsText = [
  "https://docs.google.com/forms/d/e/1FAIpQLSd_mcdH0YiQSdcLMNTL1VE6YpnAsF0zFjgrTOf1VLOZqdfw4g/viewform?usp=sf_link",
  "#",
  "https://docs.google.com/forms/d/e/1FAIpQLSeRzPcLdX2rOHbtXAPZZNriTaIlspqPfFC7brAK6BYJ54TP_Q/viewform?usp=sf_link"
]

function submissionIsValid(properties) {
  const values = _.values(_.omit(properties, ['questions']));
  return _.every(values, Boolean);
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this._generateUnsentFormBodyMarkup = ::this._generateUnsentFormBodyMarkup;
    this._handleChange = ::this._handleChange;
    this._handleSelect = ::this._handleSelect;
    this._handleSubmit = ::this._handleSubmit;
    this._handleSubmissionError = ::this._handleSubmissionError;
    this._handleSubmissionSuccess = ::this._handleSubmissionSuccess;

    this.state = {};

    fields.forEach(field => this.state[field] = '');
    this.state = {
      ...this.state,
      canSend: false,
      sending: false,
      sent: false,
      sentError: null,
      deadline: null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    var type = this.state.type;
    var idx = projectTypes.indexOf(type);
    var link = document.getElementById("google-form-link");

    if (idx == 0 || idx == 2) {

      var linkText = "Please fill out this supplementary " + type + " form.";
      link.target = "_blank";
      link.href = googleFormsText[idx];
      link.innerHTML = linkText;
    } else {
      link.target = "";
      link.href = "#";
      link.innerHTML = "";
    }

  }

  _generateUnsentFormBodyMarkup() {
    const dateProps = {
      minDate: moment().add(3, 'w'),
      selected: this.state.selectedDate,
      onChange: this._handleDateChange
    };

    const formButton = !this.state.sending ? (
      <div
        className={
          classNames('button__wrapper', {
            disabled: !this.state.canSend
          })
        }
      >
        <button id="form__submit" type="submit">
          submit
        </button>
      </div>
    ) : (
      <div className="button__wrapper">
        <div className="submit__loader"></div>
      </div>
    );

    return (
      <form id="request-form" onSubmit={this._handleSubmit} netlify="true" netlify-honeypot="bot-field">
        <span style={{display: "none"}}>
          <input name="bot-field" />
          <input name="campus" />
          <input name="type" />
        </span>
        <Input
          id="name"
          value={this.state.name}
          onChange={this._handleChange}
        />
        <Input
          id="email"
          type="email"
          value={this.state.email}
          onChange={this._handleChange}
        />
        <div className="input__container input__container--half">
          <label htmlFor="phone">Phone</label>
          <MaskedInput id="phone" mask="(111) 111-1111" name="phone" onChange={this._handleChange}/>
        </div>
        <Input
          id="organization"
          label="Organization Name"
          value={this.state.organization}
          onChange={this._handleChange}
        />
        <Input
          id="description"
          label="Organization Description"
          value={this.state.description}
          onChange={this._handleChange}
          long={true}
        />
        <div className="input__container input__container--half">
          <Dropdown
            name="campus"
            options={campusTypes}
            onChange={(selection) => this._handleSelect(selection, "campus")}
            value={this.state.campus}
            placeholder="Select your organization type"
          />
        </div>
        <div className="input__container input__container--half last">
          <Dropdown
            name="type"
            options={projectTypes}
            onChange={(selection) => this._handleSelect(selection, "type")}
            value={this.state.type}
            placeholder="Select your project type"
          />
        </div>
        <div className="input__container input__container--half" style={{ visible: "hidden" }}>
          <a href="#" target="" id="google-form-link"></a>
        </div>
        <div className="input__container input__container--half">
          <label htmlFor="phone">Deadline</label>
          <DatePicker
            name="deadline" {...dateProps}
            id="deadline"
            minDate={moment().add(14, 'days')}
            maxDate={moment('2019-12-03')}
            selected={this.state.deadline}
            onChange={(selection) => this._handleSelect({value: selection}, "deadline")}
          />
        </div>
        <Input
          id="project"
          label="Project Description"
          onChange={this._handleChange}
          value={this.state.project}
          long={true}
        />
        <Input
          id="questions"
          label="Additional Information"
          onChange={this._handleChange}
          value={this.state.questions}
          long={true}
        />

        { formButton }

      </form>



    );
  };

  _handleSelect(selection, id) {
    this._handleChange({
      target: {
        name: id,
        value: selection.value
      }
    });
  }

  _createPayload() {
    const payload = fields.reduce((curr, next) => {
      curr[next] = this.state[next];
      return curr;
    }, {});

    if (payload.deadline) {
      payload.deadline = payload.deadline.format("MM/DD/YYYY");
    }

    return payload;
  }

  _handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    }, () => {
      this.setState({
        canSend: submissionIsValid(this._createPayload())
      });
    });
  }

  _handleSubmit(e) {
    e.preventDefault();

    const jsonPayload = this._createPayload();
    if (!submissionIsValid(jsonPayload)) {
      return;
    }
    jsonPayload['form-name'] = 'request-form';

    this.setState({
      sending: true,
      request: jsonPayload
    });

    const body = Object.keys(jsonPayload).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(jsonPayload[key]);
    }).join('&');

    fetch('/requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    }).then(res => this._handleSubmissionSuccess())
      .catch(err => this._handleSubmissionError(err));
  }

  _handleSubmissionError(error) {
    console.error(error.responseJSON); // {error, message, statusCode}

    this.setState({
      sent: true,
      sending: false,
      sentError: {
        message: "Sorry we couldn't process your request. Please try again."
      }
    });

    $('html, body').animate({
      scrollTop: $(document).height()
    }, 400);
  }

  _handleSubmissionSuccess() {
    this.setState({
      sent: true,
      sending: false,
      sentError: null
    });
  }

  render () {
    const sentMsgBody = (
      <div className="sent__message">
        <div className="thanks">Thank you!</div>
        <p>
          Your message has been sent.
          Due to the large volume of requests, an officer should be reaching out to you within 2 weeks to discuss the details of the project.
        </p>
        <p>
          Feel free to reach out to <a href="mailto:innovativedesignatcal@gmail.com">innovativedesignatcal@gmail.com</a> with additional questions.
        </p>
        <p
          style={{
            color: 'red'
          }}
        >
        </p>
      </div>
    );

    var formBody;

    if (this.state.sent && !this.state.sentError) {
      formBody = sentMsgBody;
    } else {
      formBody = this._generateUnsentFormBodyMarkup();
    }

    const errorBody = this.state.sentError ? (
      <div
        style={{
          textAlign: 'center'
        }}
      >
        { this.state.sentError.message }
      </div>
    ) : null;

    return (
      <DocumentTitle title="Innovative Design">
        <div>
          <div className="page__wrapper requests">
            <h1 className="header">Design Requests</h1>
            <div className="page__wrapper requests">
              <div
                className="request__info"
                style={{
                  display: this.state.sent && !this.state.sentError ? "none" : "block"
                }}
              >
                <p
                  style={{
                    color: 'red'
                  }}
                >
                </p>
              </div>
              <div className="request__form">
                {
                  // <h4 style={{ textAlign: 'center', fontWeight: 400 }}>
                  //   Requests are closed! Please check back next semester.
                  // </h4>
                  <div>
                    <h3 style={{ textAlign: 'center', fontWeight: 400 }}>
                      Thank you for your interest in working with us! We look forward to receiving your request, but we do ask that you please keep in mind our designers' two week minimum turnaround policy when considering your project deadline.
                    </h3>
                    <h3 style={{ textAlign: 'center', fontWeight: 400 }}>
                      Innovative Design is proud to offer pro bono services for on campus student organizations and university programs. However, our work for off campus groups is not pro bono. We recommend that off campus organizations submit their design requests through this form and contact innovativedesignatcal@gmail.com for more information on rates.
                    </h3>
                  </div>
                }
                {
                  formBody
                }
              </div>
              <div className="request__error">
                { errorBody }
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
