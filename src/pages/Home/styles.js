import styled from 'styled-components';
import { darken } from 'polished'; /* darken escurece uma cor*/

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  #id{
    display: grid;  /*Nossos produtos vão ficar em formato de grid */
    grid-template-columns: repeat(4, 1fr); /* 4 espaçamentos (colunas) de grid com largura igual */
    grid-gap: 13px; /*Distanciar os produtos em 20px */
    list-style: none; /*Tirar as bolinhas */
    margin-top: 30px;
    flex: 1 0; 
    align-self: center;
  }

  @media(max-width: 749px) {
     #id{
      grid-template-columns: repeat(1, 1fr);
      /* grid-gap: 15px; */
      margin: 15px auto;
     } 
  }
    @media (min-width: 750px) and (max-width: 1023px)  {
     #id{
      grid-template-columns: repeat(2, 1fr);
      /* grid-gap: 15px; */
      margin: 15px auto;
     } 
  }
    @media (min-width: 1023px) and (max-width: 1282px)  {
     #id{
      grid-template-columns: repeat(3, 1fr);
      /* grid-gap: 15px; */
      margin: 15px auto;
     } 
  }
`

export const ProductList = styled.ul`
    display: grid;  /*Nossos produtos vão ficar em formato de grid */
    grid-template-columns: repeat(4, 1fr); /* 4 espaçamentos (colunas) de grid com largura igual */
    grid-gap: 13px; /*Distanciar os produtos em 20px */
    list-style: none; /*Tirar as bolinhas */
    margin-top: 30px;
    flex: 1 0; 
    align-self: center;

    @media(max-width: 767px) {
      grid-template-columns: repeat(1, 1fr);
      /* grid-gap: 15px; */
      margin: 15px auto;
  }
    @media (min-width: 768px) and (max-width: 1023px)  {
      grid-template-columns: repeat(2, 1fr);
      /* grid-gap: 15px; */
      margin: 15px auto;
  }

  #img{
     padding:0px;
     align-self:center;
   }


    li {
      display: flex;
      flex-direction: column; /*Ficar uma informação abaixo da outra */
      background: #fff;
      border-radius: 4px;
      padding: 10px;
      max-width: 266px;

      &:hover{
        box-shadow: 5px 5px 15px 15px rgba(0,0,0,0.3);
      }

      @media(max-width: 800px) {
      width: 330px;
      margin: auto;
      }

        img{
          align-self: center;
          max-width: 250px;
          object-fit: cover;
          max-width: 178px;
          margin: 2px;
          z-index:5;
        }

        > strong { /*Coloquei o sinal de maior para que a instrução que eu passar não funcione dentro de qualquer coisa que não seja dentro do li */
          font-size: 16px;
          line-height: 20px;
          color: #333;
          margin-top: 5px;
        }

        > span{ /*Obs.: não vai mexer no span que está dentro do botão, só o do li */
          font-size: 21px;
          font-weight: bold;
          margin:5px 0 20px;
        }

        button{
          background: #576B55;
          font-size: 12px;
          color: #fff;
          border: 0;
          border-radius: 4px;
          overflow: hidden; /* */
          margin-top: auto; /*Para ele sempre ficar alinhado igual do topo em todos os produtos */

          display:flex;
          align-items: center;
          transition: background 0.2s;

          &:hover{
            background: ${darken(0.03, '#576B55')};
          }

          div{
            display: flex;
            align-items: center;
            padding:12px;
            background: rgba(0, 0,0, 0.1);

            svg{
              margin-right: 5px;
            }
          }

         

          span { /*Titulo do botão */
            flex: 1; /*Para que ele ocupe todo o tamanho possível */
            text-align: center;
            font-weight: bold;
            font-size: 11px;
          }
        }
    }

`;
