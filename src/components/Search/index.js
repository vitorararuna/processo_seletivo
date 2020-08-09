import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import { Container, Button_, Card_, Col_, Form_, Row_ } from './styles';

export default function Search() {

    const [price, setPrice] = useState("Preco");
    const [ligue, setLigue] = useState("Liga");
    const [color, setColor] = useState("Cor");
    const [brand, setBrand] = useState("Cor");

    return (
        <Container>
            <Card_.Body>
                <Form_>
                    <Row_>
                        <Col_>
                            <Form_.Control type="text" name="price" onChange="" as="select" custom >
                                <option>Preço</option>
                                <option>Até R$100,00</option>
                                <option>R$100,00 a R$200,00 </option>
                                <option>Acima de R$200,00</option>
                            </Form_.Control>
                        </Col_>
                        <Col_>
                            <Form_.Control type="text" name="homePrice" onChange="" as="select" custom >
                                <option>Liga</option>
                                <option>Brasileirão </option>
                                <option>Premier League</option>
                                <option>Bundesliga</option>
                                <option>Ligue 1</option>
                                <option>Série A Tim</option>
                                <option>La Liga</option>
                            </Form_.Control>
                        </Col_>
                        <Col_>
                            <Form_.Control type="text" name="homeBedroom" onChange="" as="select" custom >
                                <option>Cor</option>
                                <option>Vermelho</option>
                                <option>Preto</option>
                                <option>Amarelo</option>
                                <option>Branco</option>
                                <option>Azul</option>
                                <option>verde</option>
                            </Form_.Control>
                        </Col_>
                        <Col_>
                            <Form_.Control type="text" name="homeBathroom" onChange="" as="select" custom >
                                <option>Marca</option>
                                <option>Nike</option>
                                <option>Adidas</option>
                                <option>Puma</option>
                                <option>Umbro</option>
                                <option>Kappa</option>
                                <option>le coq</option>
                                <option>Retrô</option>
                            </Form_.Control>
                        </Col_>
                    </Row_>
                    <Row_ >
                        <div id="alinhar">
                            <Button_ onClick={() => console.log("click")} >
                                <div id="success">Pesquisar <AiOutlineSearch /> </div>
                            </Button_>
                            <Button_ onClick={() => console.log("click")} >
                                <div id="danger"> Limpar Filtros <AiOutlineDelete /> </div>
                            </Button_>
                        </div>
                    </Row_>
                </Form_>
            </Card_.Body>
        </Container>
    )
}
