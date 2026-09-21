"use client"

import { BookContext } from '@/BookContext/bookContext';
import { IBook } from '@/types/book.type';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const WhisList = ({ books }: { books: IBook }) => {

    const { wishlist, setWishlist } = useContext(BookContext)

    const handleBtnClick = () => {

        console.log(books)
        setWishlist([...wishlist, books])
        toast.success(`Added "${books.bookName}" to Wishlist!`)
    }

    return (
        <button onClick={() => handleBtnClick()} className="btn btn-outline flex-1">
            🔖 Wishlist
        </button>
    );
};

export default WhisList;