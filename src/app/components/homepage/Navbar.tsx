"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          className={
            pathname === "/books"
              ? "text-green-600 border border-green-400 rounded-lg font-semibold"
              : "text-gray-600 hover:text-green-600"
          }
          href="/books"
        >
          Books
        </Link>
      </li>

      <li>
        <Link
          className={
            pathname === "/listed-book"
              ? "text-green-600 border border-green-400 rounded-lg font-semibold"
              : "text-gray-600 hover:text-green-600"
          }
          href="/listed-book"
        >
          Listed Books
        </Link>
      </li>

      <li>
        <Link
          className={
            pathname === "/page-to-Read"
              ? "text-green-600 border border-green-400 rounded-lg font-semibold"
              : "text-gray-600 hover:text-green-600"
          }
          href="/page-to-Read"
        >
          Pages to Read
        </Link>
      </li>
    </>
  );

  return (
    <div className="container mx-auto px-4 mt-5">
      <div className="navbar px-4">

        {/* Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Mobile Menu */}
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-white rounded-xl z-10 mt-3 w-52 p-3 shadow-lg border"
            >
              {links}
            </ul>
          </div>

          <Link
            href="/"
            className="text-2xl font-bold text-gray-800 hover:text-green-600"
          >
            📚 Book Vibe
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            {links}
          </ul>
        </div>

        {/* Buttons */}
        <div className="navbar-end gap-2">
          <button className="btn btn-success text-white">
            Sign In
          </button>

          <button className="btn btn-info text-white">
            Sign Up
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;