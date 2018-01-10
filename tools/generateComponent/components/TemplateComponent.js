/* eslint-disable */
import React, { PropTypes } from 'react';
import './template.scss';

export default class TemplateComponent extends React.Component{
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

TemplateComponent.propTypes = {
};