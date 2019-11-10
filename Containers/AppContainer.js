import React from 'react';
import { connect } from 'react-redux';
import actionTypes from '../Constants/actionTypes';
import AppNavigator from '../Navigators/AppNavigator';
import currentTimeUnitMilisecondReducer from '../Reducers/currentTimeUnitMilisecondReducer';

const {
  GOT_CURRENT_LOCATION,
  SET_VALUE_OF_TO,
  TYPED_FROM,
  CHANGED_MARKER_LOCATION,
  GOT_DIRECTIONS,
  SET_ALARM_TIMERS,
  SAVED_ALARM_SETTING,
  GOT_DEPARTURE_TIME_INFO,
  SET_CURRENT_TIME
} = actionTypes;
const mapStateToProps = state => {
  return {
    from: state.from,
    to: state.to,
    alarmTimers: state.alarmTimers,
    isAlarmOn: state.isAlarmOn,
    directions: state.directions,
    isReadyToGetDirections: state.isReadyToGetDirections,
    departureTimeInfo: state.departureTimeInfo,
    currentTimeUnitMilisecond: state.currentTimeUnitMilisecond
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentLocationToFrom: (lat, lon) => {
      dispatch({
        type: GOT_CURRENT_LOCATION,
        data: [Number(lat), Number(lon)],
      });
    },
    onFromInputChange: TypedValue => {
      dispatch({
        type: TYPED_FROM,
        data: TypedValue,
      });
    },
    onMarkerChange: (lat, lon) => {
      dispatch({
        type: CHANGED_MARKER_LOCATION,
        data: [Number(lat), Number(lon)],
      });
    },
    setValueOfTo: text => {
      console.log('setValueOfTo ON');
      dispatch({
        type: SET_VALUE_OF_TO,
        data: text,
      });
    },
    setDirections: directions => {
      dispatch({
        type: GOT_DIRECTIONS,
        data: directions,
      });
    },
    setAlarmTimers: alarmTimers => {
      dispatch({
        type: SET_ALARM_TIMERS,
        data: alarmTimers,
      });
    },
    saveAlarmSetting: () => {
      dispatch({
        type: SAVED_ALARM_SETTING,
      });
    },
    setDepartureTimeInfo: info => {
      dispatch({
        type: GOT_DEPARTURE_TIME_INFO,
        data: info,
      });
    },
    setCurrentTime: timeUnitMilisecond => {
      dispatch({
        type: SET_CURRENT_TIME,
        data: timeUnitMilisecond,
      });
    },

    // onToChange: (dispatch) => {

    // }
  };
};

const AppContainer = props => {
  return <AppNavigator screenProps={props} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
