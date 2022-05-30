import { GET_BOOKS, ADD_TO_BOOKMARK_LIST, REMOVE_FROM_BOOKMARK_LIST } from "./actions";

const initialState = {
    books: [],
    booksmarks: []
}

function booksReducer (state = initialState, action){
    switch (action.type) {
        case GET_BOOKS:
            return { ...state, books: action.payload}   
        case ADD_TO_BOOKMARK_LIST:
            return { ...state, booksmarks: [...state.booksmarks, action.payload]} 
        case REMOVE_FROM_BOOKMARK_LIST:
            return { ...state, booksmarks: state.booksmarks.filter(book => book.id !== action.payload.id)}
        default:
            return state;
    }
}

export default booksReducer