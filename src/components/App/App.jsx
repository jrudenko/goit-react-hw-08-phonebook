import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from 'routes/PrivatRoutes';
import PublicRoute from 'routes/PublicRoutes';
import { authOperations, authSelectors } from 'redux/auth';
import Loader from 'components/Loader';
import AppBar from 'components/AppBar';
import { ToastContainer } from 'react-toastify';

const PageHome = lazy(() => import('pages/PageHome'));
const PageRegistration = lazy(() => import('pages/PageRegistration'));
const PageLogin = lazy(() => import('pages/PageLogin'));
const PageContacts = lazy(() => import('pages/PageContacts'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/"
                exact
                element={
                  <PublicRoute>
                    <PageHome />
                  </PublicRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <PageRegistration />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    < PageLogin />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <PageContacts />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />              
            </Routes>
          </Suspense>
          <ToastContainer autoClose={3700} position="top-center" />
        </>
      )}
    </>
  );
};

export default App;
