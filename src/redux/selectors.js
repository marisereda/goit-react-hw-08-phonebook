export const selectors = {
  email: state => state.user.email,
  token: state => state.user.token,
  errorLogIn: state => state.user.errorLogIn,
  errorRegister: state => state.user.errorRegister,
  isLoading: state => state.contacts.isLoading,
};
