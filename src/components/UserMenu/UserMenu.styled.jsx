import styled from '@emotion/styled'

export const MenuContainer  = styled.div`
display: flex;
align-items: center;
`;

export const MenuBox  = styled.div`
display: flex;
flex-direction: column;
margin-right: 20px;
`;

export const MenuTitle  = styled.p`
font-size: 16px;
margin: 0;
color: #5c054f;
`;


export const MenuBtn  = styled.button`
display: flex;
align-items: center;
justify-content: center;
color: #151414;
border: 1px solid #986969;
background-color: #E0D2D5;
width: 100px;
height: 32px;
margin-left: 10px;
padding: 5px;
cursor: pointer;
text-decoration: none;
border: none;
border-radius: 4px;
font-size: 16px;
/* transition: background-color ease-in-out 300ms; */
  &:hover,
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;

