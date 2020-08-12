import styled from 'styled-components';
import { darken } from 'polished'; /* darken escurece uma cor*/

export const Body = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-height: 100vh; */
`;

export const Container = styled.section`
    position:relative;
    align-self: center;

    .card{
        position: relative;
        width: 310px;
        height: 340px;
        background: #232323;
        border-radius:20px;
        overflow: hidden;
    }

    .card:before{
        content: '';
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background: ${props => props.color};
        transition: 0.5s ease-in-out;

        ${props => props.sty === true ?
    `clip-path: circle(300px at 100% -40%) !important;`
    :
    `clip-path: circle(150px at 80% 20%) !important;`
  };
    }

    .card:hover:before{
        clip-path: circle(300px at 100% -40%) !important;
    }

    .card:after{
        content: 'Soccer';
        position: absolute;
        top:18%;
        left:-20%;
        font-size: 12rem;
        font-weight: 800;
        font-style: italic;
        color: rgba(255,255,255,0.04);
    }

    .imgBx{
        position: absolute;
        top: 50%;
        z-index: 10;
        width:100%;
        height: 220%;
        transition: 0.5s;
        ${props => props.sty === true ?
    `top: -67%;
        transform: translateY(0%);`
    :
    `transform: translateY(-50%);`
  };
        
    }

    .card:hover .imgBx{
        top: -67%;
        transform: translateY(0%);
    }

    .imgBx img{
       position: relative;
       top: 30%;
       left: 3.8%;
       width:284px;
    }

    .card .contentBx {
        position: absolute;
        bottom: 0;
        width:100%;
        text-align: center;
        transition: 1s !important;
        z-index: 10;
        ${props => props.sty === true ?
    `height: 115px;`
    :
    `height: 40px;`
  };
        
    }

    .card:hover .contentBx {
        height: 115px;
    }

    .card .contentBx h2 {
        position: relative;
        font-weight: 600;
        letter-spacing:1px;
        color:#fff;
        /* margin-top: 10px; */
    }

    .card .contentBx .size {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 20px;
        transition: 0.5s;
        ${props => props.sty === true ?
    `opacity: 1;
         visibility: visible;
         transition-delay: 0.6s;`
    :
    `opacity: 0;
        visibility: hidden;`
  };
    }

    .card:hover .contentBx .size{
        opacity: 1;
        visibility: visible;
        transition-delay: 0.6s;
    }


    .card .contentBx .size h3 {
       color: #fff !important;
       font-weight: 300;
       font-size: 14px;
       text-transform: uppercase;
       letter-spacing: 2px !important;
       margin-right:10px;
    }

    .card .contentBx .size span {
       width: 26px;
       height: 26px;
       text-align: center;
       line-height: 26px;
       font-size: 14px;
       display: inline-block;
       color:#111 !important;
       margin:0 5px;
       border-radius: 4px;
       background: #fff;
       cursor: pointer;
    }

    .card .contentBx .size span:hover {
       background-color:#007000;
    }


    .card button{
          background: #007000;
          font-size: 12px;
          color: #fff;
          border: 0;
          border-radius: 4px;
          margin: auto;
          display:flex;
          align-items: center;
          transition: background 0.2s;
          transition: 0.8s;
          ${props => props.sty === true ?
    `opacity:1;
            transform: translateY(0px);
            visibility: visible;
            transition-delay: 0.6s;`
    :
    `opacity: 0;
            visibility: hidden;`
  };

          &:hover{
            background: ${darken(0.03, '#007000')};
            opacity: 1;
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
            padding: 0px 6px;
          }
        }

        .card:hover .contentBx button{
            opacity:1;
            transform: translateY(0px);
            visibility: visible;
            transition-delay: 0.6s;
        }

`;

{/* <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <div id="img">
              <img
                src={product.images[0]}
                alt={product.title}
                onMouseOver={(e) => (e.target.src = product.images[1])}
                onMouseLeave={(e) => (e.target.src = product.images[0])}
              />
            </div>
            <strong>{product.title}</strong>

            {product.promotion ?
              <span>{product.priceFormatted}</span>
              :
              <span>{product.priceFormatted}</span>
            }
            <button
              type="button"
              onClick={() => handleAddProduct(product.id)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" /> {amount[product.id] || 0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>

        ))}
      </ProductList > */}