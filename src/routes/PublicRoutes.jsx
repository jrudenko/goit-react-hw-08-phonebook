import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : children}</>;
}
export default PublicRoute;
