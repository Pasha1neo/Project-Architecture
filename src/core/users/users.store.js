import { USERS_ACTION_TYPE } from './users.type';
import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
const initialState = {
  users: initRequestState(),
};

export function usersStore(state = initialState, action) {
  switch (action.type) {
    case USERS_ACTION_TYPE.USERS_DATA_GET_PENDING:
      return {
        ...state,
        users: setRequestPending(state.users),
      };
    case USERS_ACTION_TYPE.USERS_DATA_GET_SUCCESS:
      return {
        ...state,
        users: setRequestSuccess(state.users, action.data),
      };
    case USERS_ACTION_TYPE.USERS_DATA_GET_ERROR:
      return {
        ...state,
        users: setRequestError(state.users, action.message),
      };
    default:
      return state;
  }
}
