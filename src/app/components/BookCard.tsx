import { IBook } from '@/types/book.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IbookCardProps {
  book: IBook
}

const BookCard = ({book}:IbookCardProps) => {
    return (
        <div
            key={book.bookId}
            className="bg-white border border-gray-200 p-5 rounded-2xl p- shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image */}
            <div className="bg-gray-100 rounded-xl p-4">
              <Image
                src={book.image}
                alt={book.bookName}
                width={800}
                height={600}
                className="w-full h-[300px] object-contain rounded-xl"
              />
            </div>

            {/* Tags */}
            <div className="flex gap-2 mt-5">
              {book.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Book Info */}
            <h2 className="text-xl font-bold mt-3 text-gray-800 ">
              {book.bookName}
            </h2>

            <p className="text-gray-500 mt-1">
              By <span className="font-medium">{book.author}</span>
            </p>

            {/* Rating & Category */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-600 font-medium">
                {book.category}
              </span>

              <span className="bg-yellow-50 text-yellow-600 px-3 py-1 rounded-full">
                ⭐ {book.rating}
              </span>
            </div>

            {/* Extra Info */}
            <div className="flex justify-between text-sm text-gray-400 mt-4">
              <span>{book.totalPages} Pages</span>
              <span>{book.yearOfPublishing}</span>
            </div>

            {/* Button */}
           <Link href={`/books/${book.bookId}`}>
              <button className="btn btn-success text-white w-full mt-5 rounded-lg">
              View Details
            </button>
           </Link>
          </div>
    );
};

export default BookCard;