import styled from 'styled-components';
import { spacing } from '../../../../lib/theme';
import {
  TextError as ErrorMessage,
  TextSecondary as Text,
} from '../../../../lib/elements/text';
import { Preloader } from '../../../../lib/elements/preloader';
import { userListConvertMapUsersData } from './user-list.convert';
import { UserListItem } from './user-list-item.component';

export function UserListComponent(props) {
  const {
    usersData,
    isPending,
    isError, // Больше нет идей
    errorMessage, // Больше нет идей
  } = props;
  // Хочется сделать что то типо свойств или ключей
  // что бы решать моменты где нужно указывать свойства для перебора
  const userList = userListConvertMapUsersData(usersData, UserListItem);
  {
    isError && <ErrorMessage>{errorMessage}</ErrorMessage>;
  }
  return (
    <Container>
      {isPending && <Preloader tid="USERS.USERS.WAITING_TEXT" post={'...'} />}
      {userList}
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  gap: ${spacing(2)};
  overflow: auto;
  height: 90%;
`;
