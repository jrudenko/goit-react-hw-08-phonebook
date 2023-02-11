// import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';
// import ContactList from 'components/ContactList';
// import { Container, Section, TitleH1, TitleH2 } from './App.styled';



// function App() { 
//   return (
//       <Container>
//         <Section title="Phonebook">
//         <TitleH1>Phonebook</TitleH1>
//         <p>You can add new contacts below:</p>
//           <ContactForm />
//         </Section>
//         <Section title="Contacts">
//           <TitleH2>Contacts</TitleH2>
//           <Filter  />
//           <ContactList />
//         </Section>
//       </Container>
//     );
// };

// export default App;

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from 'routes/PrivatRoutes';
import PublicRoute from 'routes/PublicRoutes';
import { authOperations, authSelectors } from 'redux/auth';
// import Loader from 'components/Loader';
import AppBar from 'components/AppBar';

const PageHome = lazy(() => import('pages/PageHome'));
const PageRegistration = lazy(() => import('pages/PageRegistration'));
const PageLogin = lazy(() => import('pages/PageLogin'));
const PageContacts = lazy(() => import('pages/PageContacts'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.isFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />
          <Suspense fallback={<h1>Loading ...</h1>}>
            <Routes>
              <Route
                path="/"
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
        </>
      )}
    </>
  );
};

export default App;
