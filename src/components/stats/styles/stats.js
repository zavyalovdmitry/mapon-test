import styled from 'styled-components/macro';

export const Container = styled.div`
  max-width: 600px;
  height: 100px;
  // padding: 40px 24px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08), 0px 2px 14px rgba(0, 0, 0, 0.06);
  // border-radius: 0 0 3px 3px;

  display: flex;
  align-items: center;
  justify-content: center;
  // flex-wrap: wrap;

  box-sizing: border-box;
`;

export const Block = styled.div`
  width: 140px;
  height: 56px;
  border-right: 1px solid #dbdbdb;

  &:last-of-type {
    border: none;
  }
`;

export const Title = styled.p`
  margin: 0;
  font-family: MuseoSansCyrl-300;
  font-size: 30px;
  line-height: 35px;
  text-align: center;

  color: #384045;v
`;

export const Text = styled.p`
  margin: 0;
  font-family: MuseoSansCyrl-300;
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  color: #797f82;
`;
