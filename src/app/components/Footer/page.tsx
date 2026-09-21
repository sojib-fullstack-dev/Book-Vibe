import React from 'react';

const Footer = () => {
    return (
       <footer className="bg-gradient-to-r from-green-50 via-white to-emerald-50 text-gray-700 mt-16 border-t border-green-100">
      <div className="container mx-auto px-4 py-8 text-center">

        <h2 className="text-2xl font-bold">
          📚 Book Vibe
        </h2>

        <p className="text-gray-400 mt-2">
          Discover your next favorite book.
        </p>

        <div className="flex justify-center gap-6 mt-5 text-sm">
          <a href="/books" className="hover:text-green-400">
            Books
          </a>

          <a href="/listed-book" className="hover:text-green-400">
            Listed Books
          </a>

          <a href="/page-to-Read" className="hover:text-green-400">
            Pages to Read
          </a>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-5">
          <p className="text-sm text-gray-500">
            © 2026 Book Vibe. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
    );
};

export default Footer;