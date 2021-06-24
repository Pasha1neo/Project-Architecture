import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UsersActionGetData } from './users.action';
import { UsersComponent } from './users.component';
import { USERS_STORE_NAME } from './users.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  isRequestPending,
  isRequestError,
  isRequestSuccess,
  getRequestErrorMessage,
} from '../../main/store/store.service';

export function UsersContainer() {
  const { state, pageLoading } = useSelector((state) => ({
    state: state[USERS_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME],
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UsersActionGetData());
  }, []);
  return (
    <UsersComponent
      isPending={isRequestPending(state.users)}
      isError={isRequestError(state.users)}
      isSuccess={isRequestSuccess(state.users)}
      errorMessage={getRequestErrorMessage(state.users)}
      usersData={state.users.data || []}
    />
  );
}
