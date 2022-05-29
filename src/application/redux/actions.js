import {api} from 'api'
// import {draftbitAPI} from '../../infrastructure/draftbitAPI'
import axios from 'axios'

// Define action types
export const GET_BOOKS = 'GET_BOOKS'
export const ADD_TO_BOOKMARK_LIST = 'ADD_TO_BOOKMARK_LIST'
export const REMOVE_FROM_BOOKMARK_LIST = 'REMOVE_FROM_BOOKMARK_LIST'    

export const getBooks = () => {
    try {
      console.log('here 2')
        return async dispatch => {
          console.log('here 3:', api)
          const response = await axios.get('https://example-data.draftbit.com/books?_limit=10')
          // const response = await draftbitAPI.get('books?_limit=10')
          console.log('here 4')
          if (response.data) {
             dispatch({type: GET_BOOKS, payload: response.data})
          } else {
              console.log('Unable to fetch data from the API BASE URL!');
          }
        };
      } catch (error) {
        // Add custom logic to handle errors
        console.log('error:',error);
    }
}