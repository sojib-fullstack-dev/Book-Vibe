"use client"
import { BookContext } from '@/BookContext/bookContext';
import { IBook } from '@/types/book.type';
import  { useContext } from 'react';
import { toast } from 'react-toastify';

const BookBtn = ({books}:{books:IBook}) => {

    const {readBooks,setReadBooks}=useContext(BookContext)


    const handleBtnClick=()=>{
        console.log(books)
        setReadBooks([...readBooks,books])
         toast.success(`You have read "${books.bookName}"`)
        
    };
    
    return (
        <div>
            <button onClick={()=>handleBtnClick()} className="btn btn-primary flex-1">
                📖 Read Now
            </button>
        </div>
    );
};

export default BookBtn;