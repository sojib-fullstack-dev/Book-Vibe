import { IBook } from '@/types/book.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedBookCard = ({ book }: { book: IBook }) => {
    return (
         <div className="flex gap-6 border border-gray-200 rounded-2xl p-5 mb-4 bg-white shadow-sm">
                    <div className="flex-shrink-0">
                        <Image
                            src={book.image}
                            alt={book.bookName}
                            width={100}
                            height={130}
                            className="rounded-xl object-cover h-[130px] w-[100px]"
                        />
                    </div>
                    <div className="flex flex-col justify-between flex-1">
                        <div className="space-y-2">
                            <h2 className="text-xl font-bold">{book.bookName}</h2>
                            <p className="text-gray-500 text-sm">By : {book.author}</p>
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-sm font-semibold">Tag</span>
                                {book.tags.map((tag) => (
                                    <span key={tag} className="badge badge-outline text-green-500 border-green-400 text-xs px-3 py-1">
                                        #{tag}
                                    </span>
                                ))}
                                <span className="flex items-center gap-1 text-sm text-gray-500 ml-2">
                                    📅 Year of Publishing: {book.yearOfPublishing}
                                </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span>👤 Publisher: {book.publisher}</span>
                                <span>📄 Page {book.totalPages}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <span className="badge bg-blue-50 text-blue-500 border-none px-4 py-3 text-sm">
                                Category: {book.category}
                            </span>
                            <span className="badge bg-orange-50 text-orange-400 border-none px-4 py-3 text-sm">
                                Rating: {book.rating} ⭐
                            </span>
                            <Link href={`/books/${book.bookId}`}>
                                <button className="btn bg-green-500 hover:bg-green-600 text-white btn-sm px-5 rounded-full">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
    );
};

export default ListedBookCard;