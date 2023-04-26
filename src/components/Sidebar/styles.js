import styled from 'styled-components';
import colors from '../../assets/styles/themes/default';

export const Link = styled.a`
  font-size: 20px;
  text-decoration: none;
  padding: 20px;
  color: #ffffff;
  font-weight: bold;
`;
export const Container = styled.div`
  border-radius: 0px 20px 20px 0px;
  height: 100vh;
  width: 20%;
  background-color: ${colors.secondary[500]};
`;
