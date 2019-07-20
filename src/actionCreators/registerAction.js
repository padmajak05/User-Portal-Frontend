import HttpClient from '../LoginPage/utils/httpClient';
import * as types from '../actionTypes';

export function loadData(payLoad)
{
    return {type: types.REGISTER_SUCCESS, payLoad}
}

export function fetchData (){
    function dispatch(){
        HttpClient.get({
            path: '/api/users/data'
        }).then((data) => {
            dispatch(loadData(data.data));
        }).catch((e) => {
            console.log(e)
            throw(e);
        });
    }
}