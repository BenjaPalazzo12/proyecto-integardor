import { ADD_FAVORITES, DELETE_FAVORITES } from "./types"

function addFavorites(objCharacter){
    return {type: ADD_FAVORITES, payload: objCharacter}
}

function deleteFavorites(id){
    return {type: DELETE_FAVORITES, payload: id}
}

export { addFavorites, deleteFavorites};