import React from 'react';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render () {

    return (
      <DocumentTitle title="Innovative Design">
        <div>
            <div className="page__wrapper apply">
                <h1 className="section__title">
                    Applications have closed for the Fall 2017 semester.
                </h1>
            </div>
        </div>
      </DocumentTitle>
    );
  }
}
