import React from 'react';

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object
    };
  },

  render () {
    const post = this.props.route.page.data;

    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    );
  }
})
