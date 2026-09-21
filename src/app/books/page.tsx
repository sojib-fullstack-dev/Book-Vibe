
import React from "react";

import { IBook } from "@/types/book.type";
import BookCard from "../components/BookCard";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const BooksPage = async () => {
  const BooksData = await getBooks();

  return (
    <section className="container mx-auto my-[70px] px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-green-600 font-semibold uppercase tracking-widest text-sm mb-2">
          Explore Our Collection
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Find Your Next <span className="text-green-600">Favorite Book</span>
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto mt-4">
          Discover inspiring stories, timeless classics, and exciting adventures
          waiting for you on your bookshelf.
        </p>

        <div className="w-20 h-1 bg-green-500 mx-auto mt-5 rounded-full"></div>
      </div>

      {/* Books */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {BooksData.map((book:IBook,bookId:number) => {
            return <BookCard key={bookId} book={book}/>
        }
           
        )}
      </div>
    </section>
  );
};

export default BooksPage;