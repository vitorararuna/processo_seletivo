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

export const Card_ = styled(Card)`
  background-color: #dcc0b0;
  
  
`;

export const Form_ = styled(Form)`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content:center;
  
    @media(max-width: 800px) {
      flex-direction: column;
      align-items:center;
      }
    
`;

export const Row_ = styled(Row)`
    display: flex;
    justify-content: center;
    margin-top: 15px;

    

    @media(max-width: 800px) {
      flex-direction: column; 
      align-self: center;

      #alinhar{
      text-align: center;
    }
      }
`;

export const Col_ = styled(Col)`
  
  select{
    background-color: #ffffff00;
    margin: 3px;
    padding: 6px;
    font-size: 15px;
    border-radius: 9px;
  }

  option{
    background-color: #86a98d;
    border-radius: 25px;
  }

`;

export const Button_ = styled(Button)`
  
  margin: 2px 5px 5px 15px;
  padding: 3px;
  border: 1px solid black;
  border-radius: 15px;
  background-color: #ffffff00;

  #success{
    background-color: #ffffff00;
    padding:5px;
    border-radius: 22px;
  }
  #success:hover{
    background-color: #28a745d4;
  }

  #danger{
    background-color: #ffffff00;
    padding:5px;
    border-radius: 22px;
  }
  #danger:hover{
    background-color: #dc3545c7;
  }


`;