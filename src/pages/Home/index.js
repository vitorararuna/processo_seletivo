import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ProductActions from '../../store/modules/product/actions';

import { Container } from './styles';

import Search from '../../components/Search/index';
import Card from '../../components/Card';


export default function Home() {
  const produtos = useSelector(state => state.product.search);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductActions.setProdutsRequest())
  }, [dispatch]);

  return (

    <Container>
      <Search />
      <div id="id">
        {produtos.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </Container>
  )
}