export function userListConvertMapUsersData(usersData, Component) {
  return usersData.map((item) => <Component {...item} />);
}
