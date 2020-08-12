import { call, put, all, takeLatest } from 'redux-saga/effects'; // call -> ajudar no await | put -> disparar uma action | all -> | takeLatest -> | select -> busca informações dentro do estado
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import { setProdutsSuccess } from './actions';

function* addProducts() {

    const data = yield call(api.get, `products`);

    const products = data.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
    }));

    yield put(setProdutsSuccess(products));
}

export default all([
    takeLatest('@product/ADD_REQUEST', addProducts)
]); 