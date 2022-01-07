import { CallApi } from '../utils'

const initialState = {
    Beers: [],
    BeersBanners: [],
    BeerBetter: {},
    BeerDetails: [],
    cart: [],
    total: 0,
    cantidad: 0,
    load: true,
    text: '',
    BeersSearch: []
};

const CARGAR_BEER = 'CARGAR_BEER';
const CARGAR_BEER_DETAILS = 'CARGAR_BEER_DETAILS';
const ID_DETAILS_BEER = 'ID_DETAILS_BEER';
const LOADING = 'LOADING';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_TO_CART = 'REMOVE_TO_CART';

const SEARCH_BEER = 'SEARCH_BEER';



export default function beersReducers(state = initialState, action: any) {
    switch (action.type) {
        case CARGAR_BEER:
            return {
                ...state,
                Beers: action.payload,
                BeersBanners: action.payload2,
                BeerBetter: action.payload3,
            };
        case CARGAR_BEER_DETAILS:
            let data = state.Beers
            let res = data.find(item => item.id === action.id);
            return {
                ...state,
                BeerDetails: res,
            };
        case SEARCH_BEER:
            let datasearch = state.Beers
            if (action.name.length <= 0) {
                return {
                    ...state,
                    BeersSearch: [],
                }
            } else {
                let search = datasearch.filter((item) => {
                    const item_data = `${item.name.toUpperCase()})`;
                    const text_data = action.name.toUpperCase();
                    return item_data.indexOf(text_data) > -1;
                });
                return {
                    ...state,
                    BeersSearch: search,
                };
            }

        case LOADING:
            return {
                ...state,
                load: action.payload,
            };
        case ID_DETAILS_BEER:
            return {
                ...state,
                id_beer: action.payload,
            };
        case ADD_TO_CART:
            let addedItem = state.Beers.find(item => item.id === action.id)
            let existed_item = state.cart.find(item => action.id === item.id)
            if (existed_item) {
                addedItem.cantidad += 1
                return {
                    ...state,
                    total: state.total + addedItem.price,
                    cantidad: state.cantidad + 1
                }
            }
            else {
                addedItem.cantidad = 1;
                addedItem.price = addedItem.ph
                let newTotal = state.total + addedItem.price
                let newcantidad = state.cantidad + 1
                return {
                    ...state,
                    cart: [...state.cart, addedItem],
                    total: newTotal,
                    cantidad: newcantidad
                }
            };

        case REMOVE_TO_CART:
            let itemToRemove = state.cart.find(item => action.id === item.id)
            let newcart = state.cart.filter(item => action.id !== item.id)
            let newTotal = state.total - (itemToRemove.price * itemToRemove.cantidad)
            let newCantidad = state.cantidad - itemToRemove.cantidad
            console.log(itemToRemove)
            return {
                ...state,
                cart: newcart,
                total: newTotal,
                cantidad: newCantidad
            };

        default:
            return {
                ...state,
            }
    }
}

export const getDataBeers = () => async (dispatch: any) => {
    try {
        dispatch({ type: LOADING, payload: true });
        const respuesta = await CallApi();
        const newdata = respuesta.filter(x => x.image_url != 'https://images.punkapi.com/v2/keg.png')
        const result = newdata.filter((v, i) => {
            if (!Object.keys(v).includes('star')) {
                v.star = Math.floor(Math.random() * 3) + 3
            }
            return v
        })
        const Banner = result.slice(8, 16);
        const rand = Math.floor(Math.random() * result.length)
        dispatch({
            type: CARGAR_BEER,
            payload: result,
            payload2: Banner,
            payload3: result[rand],
        });
        dispatch({ type: LOADING, payload: false });
    } catch (error) {
        console.error(error);
    }
}


export const getBeerDetails = (id) => {
    return { type: CARGAR_BEER_DETAILS, id }
}
export const addToCart = (id) => {
    return { type: ADD_TO_CART, id }
}
export const removeToCart = (id) => {
    return { type: REMOVE_TO_CART, id }
}
export const searchBeer = (name) => {
    return { type: SEARCH_BEER, name }
}


/* export const getBeerDetails = (id: any) => async (dispatch: any, getState: any) => {
    const data = getState().Beers;
    const res = data.find(x => x.id === id);
    dispatch({ type: CARGAR_BEER_DETAILS, payload: res });
    return { type: CARGAR_BEER_DETAILS, id }
} */