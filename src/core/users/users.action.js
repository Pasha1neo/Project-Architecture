import { httpRequest } from '../../main/http';
import { USERS_ACTION_TYPE } from './users.type';
import { USERS_API } from './users.constant';
import { usersConvertMapUsersData } from './users.convert';
export function UsersActionGetData() {
  return async (dispatch) => {
    dispatch({ type: USERS_ACTION_TYPE.USERS_DATA_GET_PENDING });
    try {
      const res = await httpRequest({
        method: USERS_API.USERS_DATA_GET.METHOD,
        url: USERS_API.USERS_DATA_GET.ENDPOINT,
      });
      const usersData = usersConvertMapUsersData(res.data);
      dispatch({
        type: USERS_ACTION_TYPE.USERS_DATA_GET_SUCCESS,
        data: usersData,
      });
    } catch (error) {
      dispatch({
        type: USERS_ACTION_TYPE.USERS_DATA_GET_ERROR,
        message: error.response.data.message,
      });
    }
  };
}
