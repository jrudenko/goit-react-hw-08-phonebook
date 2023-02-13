import styled from '@emotion/styled'

export const PageHomeSection = styled.section`
display: block;
  min-width: 420px;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 20px;

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

export const PageHomeTitle = styled.h1`
text-align: center;
font-weight: 700;
text-transform: uppercase;
color: var(--primaryTextColor);
transition: all 0.5s ease;
text-shadow: 2px 2px 4px blue;
`;
export const PageHomeTitle2 = styled.h1`
text-align: center;
text-transform: uppercase;
font-weight: 700;
background: linear-gradient(to right, #833ab4, #f50057, #fcb045, #b345fc) 47%
    0%;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

export const PageHomeText= styled.p`
text-align: center;
`;

