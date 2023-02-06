import styled from '@emotion/styled'


export const Form = styled.form`
margin-top: 5px;
  max-width: 360px;
  border-radius: 4px;
  padding: 10px;
  background-color: #C5A9A3;
  box-shadow: 0px 1px 2px 0px rgba(234, 171, 243, 0.7),
            1px 2px 4px 0px rgba(234, 171, 243, 0.7),
            2px 4px 8px 0px rgba(234, 171, 243, 0.7),
            2px 4px 16px 0px rgba(234, 171, 243, 0.7);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
`;

export const Input = styled.input`
  width: 200px;
  margin-top: 2px;

  border-radius: 4px;
  border: 1px solid #986969;
`;

export const Button = styled.button`
width: 100px;
    height: 30px;
    font-size: 16px;
    text-align: center;
  cursor: pointer;

  border-radius: 4px;
  border: 1px solid #986969;
  background-color: #E0D2D5;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;