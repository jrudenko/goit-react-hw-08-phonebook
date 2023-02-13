import styled from '@emotion/styled'


export const Form = styled.form`
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  padding: 10px;
  background-color: var(--bgColorform);
  box-shadow: var(--boxShadow);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 20px;
  
 
`;

export const Input = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2px;
  padding: 10px;
  width: 100%;
  border: 2px solid rgba(33, 33, 33, 0.2);
  border-radius: 20px;
  cursor: pointer;
  font-size: 15px;
  box-shadow: 17px 17px 84px 18px rgba(21, 15, 15, 0.2) inset;
  background-color: #eb1d1d;
  &::placeholder {
  color: #ffffff;
  font-style: italic;  
}
  &:focus {
  background-color: #f9f1f1;
  /* outline-color: var(--accentColor); */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  border: 2px solid rgb(252, 6, 6);
  }

`;

export const Button = styled.button`
  width: 100px;
  height: 100%;
  padding: 5px;
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;
  font-size: 15px;
  box-shadow: 17px 17px 84px 18px rgba(21, 15, 15, 0.2) inset;
  border: 2px solid rgb(252, 6, 6);
  background-color: #eb1d1d;

  &:hover,
  &:focus {
  background-color: rgb(114, 113, 114);
  }
`;