"use client";
import { BookContext } from '@/BookContext/bookContext';
import { IBook } from '@/types/book.type';
import React, { useContext, useState } from 'react';

import ListedBookCard from './ListedBookCard';

const BookCard = ({ book }: { book: IBook }) => {
    return (
        <ListedBookCard key={book.bookId} book={book} />
    );
};

const ListedPage = () => {
    const { readBooks, wishlist } = useContext(BookContext)
    const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

    const sortBooks = (books: IBook[]) => {
        const sortedBooks = [...books];

        if (sortBy === "rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === "pages") {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        } else if (sortBy === "year") {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        return sortedBooks;
    };
    const sortedReadBooks = sortBooks(readBooks);
    const sortedWishlist = sortBooks(wishlist);

    return (
        <div className='container mx-auto py-20 '>
            <h1 className='font-bold text-2xl bg-amber-100 py-13 text-center rounded-2xl'>
                Listed Books
            </h1>
            <div className='text-center mt-5' >
                <select  onChange={(e) =>
                 setSortBy(e.target.value as "rating" | "pages" | "year")} defaultValue="Pick a Runtime" className="select select-success"
                 
                >
                    <option disabled={true}>Sort by</option>
                    <option value={"rating"}>Rating</option>
                    <option value={"pages"}>Number of Pages</option>
                    <option value={"year"}>Year of Publishing</option>
                </select>
            </div>

            <div className="tabs tabs-lift mt-10">
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})`} />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                       sortedReadBooks.length > 0 ? (
                            sortedReadBooks.map((book: IBook) => (
                                <BookCard key={book.bookId} book={book} />
                            ))
                        ) : (
                            <p className="text-center text-lg font-semibold">
                                No read books found
                            </p>
                        )
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books (${wishlist.length})`} defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                       sortedWishlist.length > 0 ? (
                           sortedWishlist.map((book: IBook) => (
                                <BookCard key={book.bookId} book={book} />
                            ))
                        ) : (
                            <p className="text-center text-lg font-semibold">
                                No wishlist books found
                            </p>
                        )
                    }
                </div>
            </div>
        </div >
    );
};

export default ListedPage;