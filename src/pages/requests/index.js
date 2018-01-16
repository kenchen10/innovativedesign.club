import React from 'react';
import classNames from 'classnames';
import Datepicker from 'react-datepicker';
import DocumentTitle from 'react-document-title';
import Dropdown from 'react-dropdown';
import MaskedInput from 'react-maskedinput';
import moment from 'moment';

import Link from 'gatsby-link';

import $ from 'jquery';
import _ from 'lodash';

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

function submissionIsValid(properties) {
  const values = _.values(_.remove(properties, 'questions'));
  return _.every(values, Boolean);
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this._generateUnsentFormBodyMarkup = this._generateUnsentFormBodyMarkup.bind(this);

    this._handlePhoneChange = this._handlePhoneChange.bind(this);
    this._handleCampusChange = this._handleCampusChange.bind(this);
    this._handleProjectTypeChange = this._handleProjectTypeChange.bind(this);
    this._handleDateChange = this._handleDateChange.bind(this);
    this._checkValidSubmission = this._checkValidSubmission.bind(this);

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleSubmissionError = this._handleSubmissionError.bind(this);
    this._handleSubmissionSuccess = this._handleSubmissionSuccess.bind(this);

    this.state = {
      canSend: submissionIsValid({
        name: ''
      }),
      enteredPhone: null,
      selectedDate: null,
      sending: false,
      sent: false,
      sentError: null,
      selectedCampusType: null,
      selectedProjectType: null,
      request: {}
    };
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
        <div className="input__container input__container--half">
          <span style={{display: "none"}}>
            <input name="bot-field" />
          </span>
          <input
            ref="name"
            id="name"
            name="name"
            defaultValue={this.state.request.name}
            onChange={this._checkValidSubmission}
            required
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input__container input__container--half last">
          <input
            ref="email"
            type="email"
            id="email"
            name="email"
            defaultValue={this.state.request.email}
            onChange={this._checkValidSubmission}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input__container input__container--half">
          <MaskedInput id="phone" mask="(111) 111-1111" name="phone" onChange={this._handlePhoneChange}/>
          <label htmlFor="phone">Phone</label>
        </div>
        <div className="input__container input__container--half last">
          <input
            ref="organization"
            type="organization"
            id="organization"
            name="organization"
            defaultValue={this.state.request.organization}
            onChange={this._checkValidSubmission}
            required
          />
          <label htmlFor="organization">Organization</label>
        </div>
        <div className="input__container">
          <textarea
            ref="description"
            name="description"
            id="description"
            defaultValue={this.state.request.description}
            onChange={this._checkValidSubmission}
            required
          ></textarea>
          <label htmlFor="description">Organization Description</label>
        </div>
        <div className="input__container input__container--half">
          <Dropdown
            options={campusTypes}
            onChange={this._handleCampusChange}
            value={this.state.selectedCampusType}
            placeholder="On or Off Campus Organization"
          />
        </div>
        <div className="input__container input__container--half last">
          <Dropdown
            options={projectTypes}
            onChange={this._handleProjectTypeChange}
            value={this.state.selectedProjectType}
            placeholder="Project Type"
          />
        </div>
        <div className="input__container input__container--half">
          <Datepicker
            name="deadline" {...dateProps}
            placeholderText="deadline" id="deadline"
            minDate={moment().add(14, 'days')}
            maxDate={moment('2018-05-15')}
          />
        </div>
        <div className="input__container">
          <textarea
            ref="project"
            name="project"
            id="project"
            defaultValue={this.state.request.project}
            onChange={this._checkValidSubmission}
            required
          ></textarea>
          <label htmlFor="project">Project Description</label>
        </div>
        <div className="input__container">
          <textarea
            ref="questions"
            name="questions"
            id="questions"
            defaultValue={this.state.request.questions}
            onChange={this._checkValidSubmission}
          ></textarea>
          <label htmlFor="questions">Additional Information</label>
        </div>

        { formButton }
      </form>
    );
  };

  _checkValidSubmission() {
    let testPayload = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      phone: this.state.enteredPhone,
      organization: this.refs.organization.value,
      description: this.refs.description.value,
      campus: this.state.selectedCampusType,
      type: this.state.selectedProjectType,
      project: this.refs.project.value,
      questions: this.refs.questions.value
    };

    if (!this.state.selectedDate) {
      testPayload.deadline = null;
    } else {
      testPayload.deadline = this.state.selectedDate.format("MM/DD/YYYY");
    }

    this.setState({
      canSend: submissionIsValid(testPayload)
    });
  }

  _handlePhoneChange(e) {
    this.setState({
      enteredPhone: e.target.value
    });
  }

  _handleCampusChange(campus) {
    this.setState({
      selectedCampusType: campus.value
    });
  }

  _handleProjectTypeChange(type) {
    this.setState({
      selectedProjectType: type.value
    });
  }

  _handleDateChange(date) {
    this.setState({
      selectedDate: date
    });
  }

  _handleSubmit(e) {
    e.preventDefault();

    const jsonPayload = {
      'form-name': 'requests',
      Name: this.refs.name.value,
      Email: this.refs.email.value,
      Phone: this.state.enteredPhone,
      Organization: this.refs.organization.value,
      OrgDescription: this.refs.description.value,
      Campus: this.state.selectedCampusType,
      Type: this.state.selectedProjectType,
      Deadline: this.state.selectedDate.format("MM/DD/YYYY"),
      ProjectDescription: this.refs.project.value,
      Additional: this.refs.questions.value
    };

    if (!submissionIsValid(jsonPayload)) {
      return;
    }

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

  componentDidMount() {}

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
            <h1 className="section__title">design requests</h1>
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
                { formBody }
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
