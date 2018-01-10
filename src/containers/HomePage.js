import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../actions/homeActions';
import HomeComponent from '../components/Home/HomeComponent';

export class HomePage extends React.Component {
  render() {
    return (
      <HomeComponent
        getTitle = {this.props.homeActions.getTitle}
        homeState = {this.props.homeState}
      />
    );
  }
}

HomePage.propTypes = {
  homeActions: PropTypes.object.isRequired,
  homeState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    homeState: state.homeState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions: bindActionCreators(homeActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);