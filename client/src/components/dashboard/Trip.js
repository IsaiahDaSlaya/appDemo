import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteTrip } from '../../actions/profileActions';

class Trip extends Component {
    onDeleteClick(id) {
        this.props.deleteTrip(id);
      }
  
    render() {
    const tripItems = this.props.trip.map(trp => (
      <li key={trp._id} className="d-flex list-group-item justify-content-center align-items-center flex-column bg-light">
        <h4>{trp.name}</h4>
        <p>
          <a>Date: <Moment format="MM/YY">{trp.date}</Moment> </a>
        </p>
        <p>
          {trp.location === '' ? null : (
            <span>
              <a>Location: {trp.location} </a>
            </span>
          )}
        </p>
        <p>
          {trp.difficulty === '' ? null : (
            <span>
                <a>Difficulty: {trp.difficulty}</a>
            </span>
          )}
        </p>
        <p>
          About:
        </p>
        <p>
          {trp.description === '' ? null : (
            <span>
              {trp.description}
            </span>
          )}
        </p>
        <p>
          <button
            onClick={this.onDeleteClick.bind(this, trp._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </p>
      </li>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
        <div className="card card-body bg-light mb-3">
          <h3 className="text-center text-secondary">Trips/Hikes</h3>
          {tripItems.length > 0 ? (
            <ul className="list-group list-group-flush">{tripItems}</ul>
          ) : (
            <p className="d-flex flex-wrap justify-content-center align-items-center">No Trips Listed</p>
          )}
        </div>
        </div>
      </div>
    );
  }
}
Trip.propTypes = {
    deleteTrip: PropTypes.func.isRequired
  };
  
export default connect(null, { deleteTrip })(Trip);
