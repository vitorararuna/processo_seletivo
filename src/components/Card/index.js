import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';


import { Container } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';


export default function Card({ product }) {

    const dispatch = useDispatch();

    const [style, setStyle] = useState(false)

    const amount = useSelector(state =>
        state.cart.reduce((sumAmount, product) => {
            sumAmount[product.id] = product.amount;
            return sumAmount;
        }, {}));

    useEffect(() => {
        if (amount[product.id] > 0) {
            setStyle(true);
        } else {
            setStyle(false);
        }
    }, [amount, product.id])

    function handleAddProduct(id) {
        dispatch(CartActions.addToCartRequest(id));
    };

    return (
        <Container sty={style} color={product.color} brand={product.brand}>
            <div className="card">
                <div className="imgBx">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="contentBx">
                    <h2>{product.title}</h2>
                    <div className="size">
                        <h3>{product.priceFormatted}</h3>
                    </div>
                    <button type="button" onClick={() => handleAddProduct(product.id)}>
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" /> {amount[product.id] || 0}
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </div>
            </div>
        </Container>
    );
}