export const selectors = {
  filter: state => state.filter,
  email: state => state.user.email,
  token: state => state.user.token,
  errorLogIn: state => state.user.errorLogIn,
  errorRegister: state => state.user.errorRegister,
  fetchingRegister: state => state.user.fetchingRegister,
  fetchingLogIn: state => state.user.fetchingLogIn,
  fetchingLogOut: state => state.user.fetchingLogOut,
  successRegister: state => state.user.successRegister,
  isLoading: state => state.contacts.isLoading,
  addContactIsLoading: state => state.contacts.addContactIsLoading,
  whoIsUpdating: state => state.contacts.whoIsUpdating,

  errorContacts: state => state.contacts.error,
};
