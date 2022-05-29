import {draftAPI} from '../draftbitAPI'

export default {
    fetchBooks: async () => {
        console.log('here 1')
        const res = await draftAPI.get('books?_limit=10').json()
        return await res.json()
    }
}