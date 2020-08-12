import React, { useState, useReducer, useEffect } from 'react'
import * as ProductActions from '../../store/modules/product/actions';
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import { Container, Buttonn, Cardd, Coll, Formm, Roww } from './styles';

export default function Search() {

    const dispatch = useDispatch();

    const produtosSearch = useSelector(state => state.product.search);
    const produtosAll = useSelector(state => state.product.all);

    const [copiaProd, setCopiaProd] = useState(produtosSearch);

    const [priceOption, setPriceOption] = useState(null);
    const [search, setSearch] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            price: "0",
            ligue: "0",
            color: "0",
            brand: "0",
        }
    );

    function handleChange(e) {
        setCopiaProd(produtosAll);
        const name = e.target.name;
        var newValue = e.target.value

        if (newValue === "Preço" || newValue === "Liga" || newValue === "Cor" || newValue === "Marca") {
            newValue = "0"
        }

        if (newValue === "Até R$100,00") {
            setPriceOption(1)
        } else if (newValue === "R$100,00 a R$200,00") {
            setPriceOption(2)
        } else if (newValue === "Acima de R$200,00") {
            setPriceOption(3)
        }

        setSearch({ [name]: newValue });
    }

    function clearSearch() {
        setSearch({ price: "0" });
        setSearch({ ligue: "0" });
        setSearch({ color: "0" });
        setSearch({ brand: "0" });
        setCopiaProd(produtosAll)
    }

    useEffect(() => {
        setCopiaProd(produtosAll)
    }, [produtosAll])

    async function handleSearch() {
        setCopiaProd(produtosAll)
        const preco = search.price;
        const liga = search.ligue;
        const cor = search.color;
        const marca = search.brand;

        const NuevoPreco = copiaProd.filter((item) => {
            if (item.priceOption !== priceOption && preco !== "0") {
                return false
            } else {
                return true
            }
        });

        const NuevoLigue = NuevoPreco.filter((item) => {
            if (item.ligue !== liga && liga !== "0") {
                return false
            } else {
                return true
            }
        });

        const NuevoCor = NuevoLigue.filter((item) => {
            if (item.cor !== cor && cor !== "0") {
                return false
            } else {
                return true
            }
        });

        const NuevoMarca = NuevoCor.filter((item) => {
            if (item.brand !== marca && marca !== "0") {
                return false
            } else {
                return true
            }
        });

        await setCopiaProd(NuevoMarca)
        dispatch(ProductActions.searchProducts(NuevoMarca))

    }

    return (
        <Container>
            <Cardd.Body>
                <Formm>
                    <Roww>
                        <Coll>
                            <Formm.Control type="text" name="price" value={search.price} onChange={handleChange} as="select" custom >
                                <option>Preço</option>
                                <option>Até R$100,00</option>
                                <option>R$100,00 a R$200,00</option>
                                <option>Acima de R$200,00</option>
                            </Formm.Control>
                        </Coll>
                        <Coll>
                            <Formm.Control type="text" name="ligue" value={search.ligue} onChange={handleChange} as="select" custom >
                                <option>Liga</option>
                                <option>Brasileirão </option>
                                <option>Premier League</option>
                                <option>Bundesliga</option>
                                <option>Ligue 1</option>
                                <option>Série A Tim</option>
                                <option>La Liga</option>
                            </Formm.Control>
                        </Coll>
                        <Coll>
                            <Formm.Control type="text" name="color" value={search.color} onChange={handleChange} as="select" custom >
                                <option>Cor</option>
                                <option>Vermelho</option>
                                <option>Preto</option>
                                <option>Amarelo</option>
                                <option>Branco</option>
                                <option>Azul</option>
                                <option>Verde</option>
                            </Formm.Control>
                        </Coll>
                        <Coll>
                            <Formm.Control type="text" name="brand" value={search.brand} onChange={handleChange} as="select" custom >
                                <option>Marca</option>
                                <option>Nike</option>
                                <option>Adidas</option>
                                <option>Puma</option>
                                <option>Umbro</option>
                                <option>Kappa</option>
                                <option>Le Coq</option>
                                <option>Retrô</option>
                            </Formm.Control>
                        </Coll>
                    </Roww>
                    <Roww >
                        <div id="alinhar">
                            <Buttonn onClick={() => handleSearch()} >
                                <div id="success">Pesquisar <AiOutlineSearch /> </div>
                            </Buttonn>
                            <Buttonn onClick={() => clearSearch()} >
                                <div id="danger"> Limpar Filtros <AiOutlineDelete /> </div>
                            </Buttonn>
                        </div>
                    </Roww>
                </Formm>
            </Cardd.Body>
        </Container>
    )
}
