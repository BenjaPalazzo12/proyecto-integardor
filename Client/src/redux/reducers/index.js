import { ADD_FAVORITES, DELETE_FAVORITES } from "../actions/types";


const initialGlobalState = {
    favorites : [],
    characters: []
}

export default function rootReducer(state = initialGlobalState, action){

    switch (action.type) {
        case ADD_FAVORITES:
            return {...state, favorites: [...state.favorites, action.payload]}

        case DELETE_FAVORITES:
            return {...state, favorites: state.favorites.filter(fav => fav.id !== action.payload )}
        default:
            return {...state}
    }

}