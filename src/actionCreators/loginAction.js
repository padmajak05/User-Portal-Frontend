'use strict';

import * as types from '../actionTypes';
import HttpClient from '../components/LoginPage/utils/httpClient';

export function loadData(payLoad) {
  return {type: types.SUCCESS, payLoad};
}

export function fetchData() {
  return function (dispatch) {
    return HttpClient.get({
      path : `/api/users/data`,
    })
    .then((data) => {
      const jsonData = (data.data);
      dispatch(loadData(jsonData.data));
      const endTime = new Date().getTime();
    })
    .catch(error => {
      throw(error);
    });
  };
}