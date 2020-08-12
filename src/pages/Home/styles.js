import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  #id{
    display: grid;  
    grid-template-columns: repeat(4, 1fr); 
    grid-gap: 13px; 
    list-style: none; 
    margin-top: 30px;
    flex: 1 0; 
    align-self: center;
  }

  @media(max-width: 749px) {
     #id{
      grid-template-columns: repeat(1, 1fr);
      margin: 15px auto;
     } 
  }
    @media (min-width: 750px) and (max-width: 1023px)  {
     #id{
      grid-template-columns: repeat(2, 1fr);
      margin: 15px auto;
     } 
  }
    @media (min-width: 1023px) and (max-width: 1282px)  {
     #id{
      grid-template-columns: repeat(3, 1fr);
      margin: 15px auto;
     } 
  }
`