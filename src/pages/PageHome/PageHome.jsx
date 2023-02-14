import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import {PageHomeSection, PageHomeTitle, PageHomeText, PageHomeTitle2 } from './PageHome.styled';

function PageHome() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <PageHomeSection>
            <PageHomeTitle>Welcome 👋</PageHomeTitle>
        <PageHomeTitle2>Now you will exactly not forget your contacts!</PageHomeTitle2>
        {!isLoggedIn && (      
          
          <PageHomeText> Please, <b>Sign up</b> or <b>Log in</b> to have access to the
            Phonebook!</PageHomeText>
      )}
      </PageHomeSection>
      
    </>
  );
}

export default PageHome;
