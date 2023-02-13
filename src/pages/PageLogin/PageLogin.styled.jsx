import styled from '@emotion/styled'

export const PageLoginSection = styled.section`
display: block;
  min-width: 420px;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 20px;
  /* padding: 20px; */

  width: 80%;
  max-width: 550px;
  margin: 1em auto;
  padding: 1em;
  border-radius: 10px;
  background: rgb(100,100,100) radial-gradient(circle at 50% 0, rgba(255,255,255,.65), rgba(255,255,255,.35));
  box-shadow:
   inset rgba(0,0,0,.6) 0 -3px 8px,
   inset rgba(252,255,255,.7) 0 3px 8px,
   rgba(0,0,0,.8) 0 3px 8px -3px;

`;

export const PageLoginTitle = styled.h1`
font-size: 16px;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
`;

export const PageHomeLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export const PageHomeInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0 20px;
  display: inline-block;
  box-sizing: border-box;
  transition: background-color 0.5s ease-in-out;
  border: 2px solid rgb(142, 213, 251);
  border-radius: 20px;
  cursor: pointer;
  font-size: 15px;
  box-shadow: 17px 17px 84px 18px rgba(21, 15, 15, 0.2) inset;

  &::placeholder {
  color: #ffffff;
  font-style: italic;  }

  &:focus {
  background-color: #f9f1f1;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  border: 2px solid rgb(22, 2, 2);
  }
`;

export const PageHomeBtn = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100%;
  padding: 5px;
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;
  font-size: 15px;
  box-shadow: 17px 17px 84px 18px rgba(21, 15, 15, 0.2) inset;
  border: 2px solid rgb(142, 213, 251);
  background-color: #858181;

  &:hover,
  &:focus {
  background-color: rgb(114, 113, 114);
  }
`;