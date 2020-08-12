import produce from 'immer';


export default function product(state = { all: [], search: [] }, action) {

    switch (action.type) {

        case '@product/ADD_SUCCESS':
            return produce(state, draft => {
                const { products } = action;
                draft.all = products;
                draft.search = products;
            });


        case '@product/SEARCH':
            return produce(state, draft => {
                const { products } = action;
                draft.search.splice(0, draft.search.length);
                products.forEach(element => {
                    draft.search.push(element);
                });
            });

        default:
            return state;
    }

}
