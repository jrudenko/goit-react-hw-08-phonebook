import styled from '@emotion/styled'

export const PageContactSection = styled.div`
  display: block;
  margin-top: 20px;
  width: 80%;
  max-width: 550px;
  margin: 1em auto;
  padding: 1em;
  border-radius: 10px;
  background: rgb(100,100,100) radial-gradient(circle at 0 0, rgba(255,255,255,.65), rgba(255,255,255,.35));
  box-shadow:
   inset rgba(0,0,0,.5) -3px -3px 8px,
   inset rgba(255,255,255,.9) 3px 3px 8px,
   rgba(0,0,0,.8) 3px 3px 8px -3px;
`;
export const PageContactTitle = styled.h1`
text-align: center;
text-transform: uppercase;
margin-bottom: 10px;
font-weight: 700;
color: var(--primaryTextColor);
transition: all 0.5s ease;
text-shadow: 2px 2px 4px blue;
`;