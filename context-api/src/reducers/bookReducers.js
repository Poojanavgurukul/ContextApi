//import uuid from 'uuid/dist/v1';
export const bookReducer = (state,action) =>{
    switch(action.type){
        case 'ADD_BOOK':
            return [...state,{
                title:action.book.title,
                author:action.book.author,
                id:state.length+1
            }]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)
        case 'EDIT_BOOK':
            const updatedBook = action.payload;
            const updatedBooks = state.map(book=>{
                if(book.id===updatedBook.id){
                    return updatedBook
                }
                return book
            })
            return {books:updatedBooks}
        default:
            return state
    }
}