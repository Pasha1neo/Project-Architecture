import { USERS_DATA_KEY } from '../../users.type';
import { Divider } from '../../../../lib/elements/divider';
import { TextSecondary as Text } from '../../../../lib/elements/text';
export function UserListItem({ id, name }) {
  return (
    <>
      <Text pre={`${USERS_DATA_KEY.ID}: `}>{id}</Text>
      <Text>{name}</Text>
      <Divider />
    </>
  );
}
