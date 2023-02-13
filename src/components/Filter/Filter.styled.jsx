import styled from '@emotion/styled'

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;

`;
export const TitleFilter = styled.p`
 text-align: center;

`;
export const Input = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2px;
  padding: 10px;
  width: 100%;
 
  border-radius: 20px;
  cursor: pointer;
  font-size: 15px;
  background-color: #f9f1f1;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  border: 2px solid rgb(252, 6, 6);
  &::placeholder {
  color: #ffffff;
  font-style: italic;  
}
  &:focus {
  border: 2px solid rgba(33, 33, 33, 0.2);
  }
`;
