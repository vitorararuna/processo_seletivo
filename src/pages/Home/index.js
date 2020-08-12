import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //Conecta o nosso componente com o estado do redux
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList, Container } from './styles';
import { formatPrice } from '../../util/format';
import Search from '../../components/Search/index';
import Card from '../../components/Card';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

export default function Home() {

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [img, setImg] = useState(0);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {}));

  useEffect(() => {

    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
        promoFormatted: formatPrice(product.promotion),
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

      <Search />

      <div id="id">
        {products.map(product => (
          <>
            <Card color={product.color} image={product.image} title={product.title} brnad={product.brand}/>
          </>
        ))}
      </div>




    </Container>
  )
}