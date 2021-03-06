import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import { getProfileByHandle, getCurrentProfile } from '../../actions/profileActions';
import Trip from './Trip';

class EditTrip extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    let TripContent;
    if (profile === null || loading) {
      TripContent = <Spinner />;
    } 
    else {
      if (Object.keys(profile).length > 0) {
        TripContent = (
          <div>
            <div className="row">
              <div className="d-flex justify-content-end col">
                <Link to={`/dashboard`} className="btn btn-secondary">Go Back</Link>
              </div>
              <div className="d-flex justify-content-start col">
                <Link to="/add-trip" className="btn btn-secondary">Add Trip</Link>
              </div>
            </div> 
              <div className="col-md-12 text-center">
            </div><br/>
            <Trip trip={profile.trip} />
          </div>
        );
      }
    }

    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{TripContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

EditTrip.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileByHandle, getCurrentProfile })(EditTrip);
