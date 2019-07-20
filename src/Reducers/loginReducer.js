import {
    SUCCESS
   } from "../actionTypes";
   
   const initialState = {
     loginFormData:null
   };
   
   export default function (state = initialState, action) {
     switch (action.type) {
     case SUCCESS:
        state.loginFormData=action.model;
        return state;
     default:
       return state;
     }
   }