export function usersConvertMapUsersData(usersData) {
  return usersData.map(({ id, login }) => {
    return { id: id, name: login };
  });
}
