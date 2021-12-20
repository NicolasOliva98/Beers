import { CallApi } from '../utils'

const initialState = {
    Beers: [],
    BeersBanners: [],
    BeerBetter: {},
    load: true,
};

const CARGAR_BEER = 'CARGAR_BEER';
const CARGAR_BEERS_BANNER = 'CARGAR_BEERS_BANNER';
const CARGAR_BETTER_BEER = 'CARGAR_BETTER_BEER';
const LOADING = 'LOADING';


export default function beersReducers(state = initialState, action: any) {
    switch (action.type) {
        case CARGAR_BEER:
            return {
                ...state,
                Beers: action.payload,
            };
        case CARGAR_BEERS_BANNER:
            return {
                ...state,
                BeersBanners: action.payload,
            };
        case CARGAR_BETTER_BEER:
            return {
                ...state,
                BeerBetter: action.payload,
            };
        case LOADING:
            return {
                ...state,
                load: action.payload,
            };
        default:
            return {
                ...state,
            }
    }
}

export const getBeers = () => async (dispatch: any) => {
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
        dispatch({ type: CARGAR_BEER, payload: result });
        const Banner = result.slice(8, 16);
        const rand = Math.floor(Math.random() * result.length)
        dispatch({ type: CARGAR_BEERS_BANNER, payload: Banner });
        dispatch({ type: CARGAR_BETTER_BEER, payload: result[rand] });
        dispatch({ type: LOADING, payload: false });
    } catch (error) {
        console.error(error);
    }
}
