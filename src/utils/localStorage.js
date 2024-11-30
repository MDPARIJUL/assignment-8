import toast from "react-hot-toast";

export const getBooks = () => {
    const books = localStorage.getItem('books');
    if(books){
        return JSON.parse(books)
    }
    else{
        return []
    }
}

export const saveBooks = (book) =>{
    const books = getBooks();
    const listedBooks = books.find(b => b.id === book.id);
    console.log(listedBooks)
    if(!listedBooks){
        books.push(book);
        toast.success('book is succussfully added in readlist')
    }
    else{
        toast.error('book already exits in readlist')
    }
    localStorage.setItem('books', JSON.stringify(books))
    console.log(books)
}

export const removeBook = (data) =>{
    const datas = getBooks();
    const filterDatas = datas.filter(d => d.id !== data.id);
    localStorage.setItem('books', JSON.stringify(filterDatas))
}
