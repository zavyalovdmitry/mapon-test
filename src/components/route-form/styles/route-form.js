import styled from 'styled-components/macro';

export const Form = styled.form`
  max-width: 600px;
  padding: 40px 24px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08), 0px 2px 14px rgba(0, 0, 0, 0.06);
  border-radius: 3px 3px 0 0;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-family: MuseoSansCyrl-300;
  font-size: 24px;
  line-height: 28px;
  color: #384045;
  margin-top: 5px;
  width: 100%;
`;

export const Text = styled.p`
  font-family: MuseoSansCyrl-300;
  font-size: 14px;
  line-height: 19px;
  color: #384045;
  width: 30%;
  margin-top: 10px;
  margin-right: 6px;

  &:first-of-type:after {
    content: '*';
    color: red;
  }

  &:last-of-type {
    margin-left: 25px;
  }
`;

export const Select = styled.select`
  background: #ffffff;
  border: 1px solid #dcdee0;
  box-sizing: border-box;
  border-radius: 3px;
  width: 380px;
  height: 32px;
  font-family: MuseoSansCyrl-300;
  font-size: 14px;
  line-height: 19px;
  color: #384045;
  padding-left: 7px;
  margin-top: 5px;
  outline: none;
`;

export const Date = styled.input`
  background: #ffffff;
  border: 1px solid #dcdee0;
  box-sizing: border-box;
  border-radius: 3px;
  width: 186px;
  padding-left: 10px;
  height: 32px;
  font-family: MuseoSansCyrl-300;
  font-size: 14px;
  line-height: 19px;
  color: #384045;
  margin-top: -10px;
  outline: none;

  &:first-of-type {
    margin-left: 31%;
    margin-right: 8px;
  }
`;
