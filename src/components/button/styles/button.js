import styled from 'styled-components/macro';

export const Container = styled.div`
  height: 64px;
  width: 600px;
  background: #f4f4f4;
  border-radius: 0px 0px 3px 3px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08), 0px 2px 14px rgba(0, 0, 0, 0.06);
  border-radius: 0 0 3px 3px;
  position: relative;
`;

export const Link = styled.a`
  background: #98ca02;
  border-radius: 3px;
  width: 103px;
  height: 32px;
  display: block;
  text-align: center;
  padding-top: 10px;
  box-sizing: border-box;
  position: absolute;
  right: 24px;
  top: 16px;
  font-family: MuseoSansCyrl-300;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: #ffffff;
  transition: 0.5s;
  box-sizing: border-box;

  &.active {
    cursor: pointer;
  }

  &.active:hover {
    opacity: 0.8;
    transition: 0.5s;
  }

  &.active:active {
    transition: 0s;
    background: #ffffff;
    color: #98ca02;
  }
`;
