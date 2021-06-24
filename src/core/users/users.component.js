import { UserListComponent as UserList } from './frame/user-list';
import { TextTitle } from '../../lib/elements/text';
import styled from 'styled-components';

export function UsersComponent(props) {
  return (
    <Container>
      <TextTitle tid="OTHER.TITLE.USERS" />
      <UserList {...props} />
    </Container>
  );
}
const Container = styled.div`
  overflow: auto;
  height: 90%;
`;
