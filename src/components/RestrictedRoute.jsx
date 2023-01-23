import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectors } from 'redux/selectors';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(selectors.token);

  return token ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
