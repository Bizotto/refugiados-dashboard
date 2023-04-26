import { createGlobalStyle } from 'styled-components';
import colors from './themes/default';

export default createGlobalStyle`

body  {
  background: ${colors.primary[500]} ;
}

button{
    cursor: pointer;
  }

`;
