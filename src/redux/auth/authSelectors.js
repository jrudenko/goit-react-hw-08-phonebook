const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getToken = state => state.auth.token;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
const getUserError = state => state.auth.error;

const authSelectors = {
  getUserName,
  getUserEmail,
  getToken,
  getIsFetchingCurrent,
  getIsLoggedIn,
  getUserError,
};
export default authSelectors;
