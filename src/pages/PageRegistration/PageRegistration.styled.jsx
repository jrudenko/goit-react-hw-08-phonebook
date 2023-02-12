import styled from '@emotion/styled'

export const PageRegistrationSection = styled.section`
display: block;
  min-width: 420px;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
`;

export const PageRegistrationTitle = styled.h2`
font-size: 16px;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
`;

export const PageRegistrationLabel = styled.label`
display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export const PageRegistrationInput = styled.input`
width: 100%;
  padding: 12px 20px;
  margin: 8px 0 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: background-color 0.5s ease-in-out;
 &:hover,
 &:focus {
  background-color: #e4ffe6;}
`;

export const PageRegistrationBtn = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #2f302f;
  width: 100px;
  height: 32px;
  margin: 0 auto;
  padding: 5px;
  cursor: pointer;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  transition: all 250ms linear;

&:hover,
&:focus {
  background-color: #818381;}
`;
