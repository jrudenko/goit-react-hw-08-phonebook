import styled from '@emotion/styled'

export const Container = styled.div`
  padding: 15px 30px;
  margin: 10px auto;
    width: 420px;
    background: #a2a49f;

    border-radius: 5px;
    box-shadow: -1px 23px 41px -25px #000000;
    overflow: hidden;
`;

export const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const TitleH1 = styled.h1`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: bold;

  &:hover {
    text-shadow: 0 0 70px #c1bec0, 0 0 20px #74366f;}
`;

export const TitleH2 = styled.h2`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    text-shadow: 0 0 70px #70074d, 0 0 20px #4f0536;}
`;
