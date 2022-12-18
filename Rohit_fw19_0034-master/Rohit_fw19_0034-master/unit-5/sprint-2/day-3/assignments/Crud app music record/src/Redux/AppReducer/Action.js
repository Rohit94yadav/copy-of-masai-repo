import axios from "axios";
import * as types from "./ActionType";

const getMusicRecordRequest = () => {
  return {
    type: types.GET_MUSIC_RECORD_REQUEST,
  };
};

const getMusicRecord = (queryParams) => (dispatch) => {
  dispatch(getMusicRecordRequest());
  return axios
    .get(`http://localhost:8080/albums`, queryParams)
    .then((res) => {
      dispatch({
        type: types.GET_MUSIC_RECORD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_MUSIC_RECORD_FAILURE,
      });
    });
};

export { getMusicRecordRequest, getMusicRecord };
