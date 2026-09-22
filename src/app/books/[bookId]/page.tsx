import Image from "next/image";
import ReadBtn from '@/BookDetails/ReadBtn'
import WhisList from "@/BookDetails/WhisList";

interface IBook {
    bookId: number;
    bookName: string;
    author: string;
    image: string;
    review: string;
    totalPages: number;
    rating: number;
    category: string;
    tags: string[];
    publisher: string;
    yearOfPublishing: number;
}

interface Props {
    params: Promise<{
        bookId: string;
    }>;
}

const getBooks = async () => {

    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);

        const data = await res.json();

        return data;

    } catch (error) {

        console.error('Error Data', error)

        return [];

    }
};
const BookDetailsPage = async ({ params }: Props) => {
    const { bookId } = await params;
    const BooksData = await getBooks();
    const books: IBook = BooksData.find(
        (book: IBook) => String(book.bookId) === String(bookId)
    );

    if (!books) {
        return <div className="text-center py-20 text-xl">Book not found!</div>;
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="card lg:card-side bg-base-100 shadow-xl rounded-2xl overflow-hidden">

                {/* Left - Image */}
                <figure className="lg:w-2/5">
                    <Image
                        src={books.image}
                        alt={books.bookName}
                        width={500}
                        height={700}
                        className="h-full min-h-[400px] w-full object-cover lg:min-h-[550px]"
                    />
                </figure>

                {/* Right - Details */}
                <div className="card-body lg:w-3/5 p-8 space-y-4">

                    {/* Category Badge */}
                    <div>
                        <span className="badge badge-primary badge-outline text-sm px-3 py-2">
                            {books.category}
                        </span>
                    </div>

                    {/* Title & Author */}
                    <h1 className="text-3xl font-bold leading-snug">
                        {books.bookName}
                    </h1>
                    <p className="text-gray-500 text-base">
                        By <span className="font-semibold text-gray-700">{books.author}</span>
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400 text-lg">⭐</span>
                        <span className="font-bold text-lg">{books.rating}</span>
                        <span className="text-gray-400 text-sm">/ 5.0</span>
                    </div>

                    <div className="divider my-1"></div>

                    {/* Review */}
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
                        {books.review}
                    </p>

                    <div className="divider my-1"></div>

                    {/* Info */}
                    <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex flex-col">
                            <span className="text-gray-400">Total Pages</span>
                            <span className="font-semibold">{books.totalPages}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-400">Publisher</span>
                            <span className="font-semibold">{books.publisher}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-400">Year</span>
                            <span className="font-semibold">{books.yearOfPublishing}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-400">Tags</span>
                            <div className="flex gap-1 flex-wrap mt-1">
                                {books.tags.map((tag) => (
                                    <span key={tag} className="badge badge-ghost badge-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="divider my-1"></div>

                    {/* Buttons */}
                    <div className="card-actions">
                        <ReadBtn books={books} />
                        <WhisList books={books} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;