import styled from 'styled-components';
import { darken } from 'polished'; /* darken escurece uma cor*/
import { Card, Form, Row, Col, Button } from 'react-bootstrap';

export const Container = styled.section`
  background-image: #ffffff00;
  min-width: -webkit-fill-available;
  align-self: center;

  @media(max-width: 800px) {
      max-width: 15rem;
      min-width: auto;
      }
  
`;

export const Cardd = styled(Card)`
  background-color: #dcc0b0;
  
  
`;

export const Formm = styled(Form)`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content:center;
  
    @media(max-width: 800px) {
      flex-direction: column;
      align-items:center;
      }
    
`;

export const Roww = styled(Row)`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    display: 1 0;

    

    @media(max-width: 800px) {
      flex-direction: column; 
      align-self: center;

      #alinhar{
      text-align: center;
    }
      }
`;

export const Coll = styled(Col)`
  
  select{
    background-color: #ffffff;
    margin: 3px;
    padding: 6px;
    font-size: 15px;
    border-radius: 9px;
  }

  option{
    background-color: #ffffff;
    border-radius: 25px;
  }

`;

export const Buttonn = styled(Button)`
  
  margin: 4px 5px 5px 15px;
  padding: 0px;
  border: 1px solid black;
  border-radius: 15px;
  background-color: #ffffff00;

  #success{
    padding:5px;
    border-radius: 22px;
    background-color: #fff;
  }
  #success:hover{
    background: ${darken(0.09, '#28a745d4')};

  }

  #danger{
    padding:5px;
    border-radius: 22px;
    background-color: #fff;
  }
  #danger:hover{
    background: ${darken(0.09, '#dc3545c6')};
  }


`;