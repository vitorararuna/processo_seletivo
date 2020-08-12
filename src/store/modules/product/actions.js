
//Quando o usuário clica em adicionar ao carrinho, ele vai disparar essa função -> que chama nosso saga "addToCart" -> que chama nossa action "addToCartSuccess"
export function setProdutsRequest() {
    return {
        type: '@product/ADD_REQUEST'
    };
}

export function setProdutsSuccess(products) {
    return {
        type: '@product/ADD_SUCCESS',
        products,
    };
}

export function searchProducts(products) {
    return {
        type: '@product/SEARCH',
        products,
    };
}
