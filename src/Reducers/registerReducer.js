import {REGISTER_SUCCESS } from '../actionTypes';

const initialState = {
  registerData:null
};

export default function (state = initialState, action) {
  switch (action.type) {
  case REGISTER_SUCCESS:
    state.registerData=action.model;
    return state;
  default:
    return state;
  }
}