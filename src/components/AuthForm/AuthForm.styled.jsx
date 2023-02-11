import styled from '@emotion/styled'

export const Auth = styled.div`
    display: flex;
    align-items: center;
`;

export const BtnForm = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #4caf50;
    width: 100px;
    height: 32px;
    margin-left: 10px;
    cursor: pointer;
    text-decoration: none;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    transition: background-color ease-in-out 300ms;
    &:hover,
    &:focus {
    background-color: #188ce8;
  }
`;

export const Active = styled.button`
    text-decoration: underline;
    background-color: #4caf50;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;
