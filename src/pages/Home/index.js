import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //Conecta o nosso componente com o estado do redux

import { ProductList, Container } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';

import Search from '../../components/Search/index';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';


export default function Home() {

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {}));

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [img, setImg] = useState(0);



  useEffect(() => {

    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
      console.log(data)
    }

    loadProducts();

  }, []);



  //Sempre que for fazer uma alteração no estado. precisamos disparar um action (objeto que contém o type e o restante do conteúdo que a gente quiser) -> onclick()
  function handleAddProduct(id) {
    //todo componente que a gente conecta com o redux (Home no caso), recebe uma propriedade que se chama dispatch => dispara uma action ao redux
    //Obs.: quando a gente dispara o dispatch, todos os reducers são ativados
    dispatch(CartActions.addToCartRequest(id));
  };

  /* OBS.: Não utilizamos o useCallback nessa function acima, pois ela não depende de outra informação, apenas do ID que recebe */


  return (

    <Container>

      <Search>

      </Search>

      <ProductList>
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
            <span>{product.priceFormatted}</span>
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
      </ProductList >
    </Container>
  )
}