import { calcCapacityy } from "../utils";

export const actionType = {
  LOAD_LEAGUE: "LOAD_LEAGUE",
  LOAD_COUNTRY: "LOAD_COUNTRY",
  LOAD_MATCHES: "LOAD_MATCHES",
  CALC_CAPACITY: "CALC_CAPACITY",
};

export const ActionCreator = {
  loadLeague: (data) => {
    return {
      type: actionType.LOAD_LEAGUE,
      payload: data,
    };
  },
  loadCountry: (data) => {
    return {
      type: actionType.LOAD_COUNTRY,
      payload: data,
    };
  },
  loadMatches: (data) => {
    return {
      type: actionType.LOAD_MATCHES,
      payload: data,
    };
  },
  calcCapacity: (data) => {
    return {
      type: actionType.CALC_CAPACITY,
      payload: calcCapacityy(data),
    };
  },
};

export const Operations = {
  init: () => (dispatch, _getState, api) => {
    api.get(`/league`).then((response) => {
      dispatch(ActionCreator.loadLeague(response.data));
    });
    api.get(`/country`).then((response) => {
      dispatch(ActionCreator.loadCountry(response.data));
    });
    api.get(`/match`).then((response) => {
      dispatch(ActionCreator.loadMatches(response.data));
      dispatch(ActionCreator.calcCapacity(response.data));
    });
  },
};
