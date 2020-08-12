import { createGlobalStyle } from 'styled-components';
import background2 from '../assets/images/backgroundFut2.png';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  *{
    margin: 0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }
  body{
    background: #2c2c2c url(${background2}) repeat center top;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font:14px Roboto, sans-serif;
  }
  #root{
    max-width: 1185px;
    margin: 0 auto;
    padding: 0 5px 10px; /* cima lateral baixo */
  }

  button {
    cursor: pointer;
  }
`;