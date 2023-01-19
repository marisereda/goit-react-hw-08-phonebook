import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectors } from 'redux/selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(selectors.token);

  return token ? <Component /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
