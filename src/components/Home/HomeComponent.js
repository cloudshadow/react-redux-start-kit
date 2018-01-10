import React, { PropTypes } from 'react';
import './home.scss';

export default class HomeComponent extends React.Component{
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.getTitle();
  }

  renderPage() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            {this.props.homeState.title}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.homeState.title ? this.renderPage() : ''}
      </div>
    );
  }
}

HomeComponent.propTypes = {
  getTitle: PropTypes.func.isRequired,
  homeState: PropTypes.object.isRequired,
};