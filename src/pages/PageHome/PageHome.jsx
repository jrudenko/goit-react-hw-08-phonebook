import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import {PageHomeSection, PageHomeTitle, PageHomeText } from './PageHome.styled';

function PageHome() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/contacts" />
      ) : (
        <PageHomeSection>
          <PageHomeTitle>Phonebook app</PageHomeTitle>
          <PageHomeText>
            Please register or log in to start to work with the app.
          </PageHomeText>
        </PageHomeSection>
      )}
    </>
  );
}

export default PageHome;
