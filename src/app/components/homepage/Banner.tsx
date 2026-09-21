import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <section className="container mx-auto px-4 mt-10">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-[#f3f3f3] rounded-2xl p-8 md:p-12">

    {/* Left Content */}
    <div className="space-y-6">
      <p className="text-green-600 font-semibold">
        Welcome to Book Vibe
      </p>

      <h2 className="font-bold text-4xl md:text-5xl leading-tight">
        Books to freshen up
        <br />
        your bookshelf
      </h2>

      <p className="text-gray-600 text-lg max-w-lg">
        Discover amazing books and find your next favorite story.
        Build your perfect bookshelf with Book Vibe.
      </p>

      <button className="btn btn-success text-white px-6">
        View The List
      </button>
    </div>

    {/* Image */}
    <div className="flex justify-center">
      <Image
        src="/hero_img.jpg"
        width={400}
        height={300}
        alt="Book"
        className="w-full max-w-100 rounded-xl object-cover"
      />
    </div>

  </div>
        </section>
    );
};

export default Banner;