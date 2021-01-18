import { actionType } from "../reducers/operations.js";
const InitialState = {
  league: [],
  country: [],
  matches: [],
  capacity:{},
};
export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionType.LOAD_LEAGUE:
      return Object.assign({}, state, {
        league: action.payload,
      });
    case actionType.LOAD_COUNTRY:
      return Object.assign({}, state, {
        country: action.payload,
      });
    case actionType.LOAD_MATCHES:
      return Object.assign({}, state, {
        matches: action.payload,
      });
    case actionType.CALC_CAPACITY:
        return Object.assign({}, state, {
            capacity: action.payload,
          });
  }
  return state;
};
