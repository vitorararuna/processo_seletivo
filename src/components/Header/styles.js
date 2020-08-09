import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header` /*!!!!!!!!!!!!!!!!! /* Componente = "Container" =>  o qual vai fzer um <header> ao redor do conteúdo que estiver dentro deste componente*/
  display: flex;  
  justify-content: space-between; /*Alinhar um item totalmente a direita e outro totalmente a esquerda*/
  align-items: center; /*Se um item form maior que o outro, vou alinhar eles ao centro */
  margin: 50px 0; /* cima baixo | esquerda direita */
  padding: 0px 75px 0px 75px;


  @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
    padding: 0px 5px 0px 5px;
  }
 
`;

export const Cart = styled(Link)` /* Para eu estilizar um componente que não é nativo do html, basta fazer desse jeito */
  display: flex;
  align-items: center; /*Já faz o carrinho ficar ao lado */
  text-decoration: none;
  transition: opacity 0.2s; /* Se o opacity for chamado em alguma vez (como no hover), ele demora 0.2 segundos */
  &:hover{
    opacity: 0.7;
  }
  div{ /*Div que está por volta dos 2 textos ! */
    text-align: center;
    margin-right: 10px;
    strong{
      display: block; /* ver qq o display box faz */
      color: #242724;
    }
    span{
      font-size: 12px;
      color:#242724;
    }
  }
`;