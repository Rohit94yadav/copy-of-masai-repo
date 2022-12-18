import {
  GET_MUSIC_RECORD_FAILURE,
  GET_MUSIC_RECORD_REQUEST,
  GET_MUSIC_RECORD_SUCCESS,
} from "./ActionType";

const initialState = {
  musicRecords: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MUSIC_RECORD_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case GET_MUSIC_RECORD_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        musicRecords: payload,
      };

    case GET_MUSIC_RECORD_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

    default:
      return oldState;
  }
};

export { reducer };
