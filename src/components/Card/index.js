import React, { useState, useEffect } from 'react'
import { Container, Body } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';


export default function Card({ color, image, title, brand }) {

    const [p_, setP] = useState(false);
    const [m_, setM] = useState(false);
    const [g_, setG] = useState(false);
    const [style, setStyle] = useState(false)

    function set_p() { setP(!p_); setM(false); setG(false) }
    function set_m() { setM(!m_); setP(false); setG(false) }
    function set_g() { setG(!g_); setM(false); setP(false) }


    useEffect(() => {
        if (p_ === true || m_ === true || g_ === true) {
            setStyle(true);
        } else {
            setStyle(false);
        }
    }, [p_, m_, g_])

    return (
            <Container color={color} sty={style} brand={brand} >
                <div className="card">
                    <div className="imgBx">
                        <img src={image} />
                    </div>
                    <div className="contentBx">
                        <h2>{title}</h2>
                        <div className="size">
                            <h3>Tamanho :</h3>
                            <span onClick={set_p} style={p_ === true ? { "backgroundColor": '#007000' } : {}}>P</span>
                            <span onClick={set_m} style={m_ === true ? { "backgroundColor": '#007000' } : {}}>M</span>
                            <span onClick={set_g} style={g_ === true ? { "backgroundColor": '#007000' } : {}}>G</span>
                        </div>
                        {/* <a href="#">Adicionar ao Carrinho</a> */}
                        <button>
                            <div>
                                <MdAddShoppingCart size={16} color="#FFF" /> 0
                        </div>
                            <span>ADICIONAR AO CARRINHO</span>
                        </button>
                    </div>
                </div>
            </Container>
    );
}