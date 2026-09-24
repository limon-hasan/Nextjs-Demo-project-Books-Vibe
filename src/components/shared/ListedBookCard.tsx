import { IBook } from "@/types/booksTypes";
import Image from "next/image";
import Link from "next/link";

const ListedBookCard = ({ book }: { book: IBook }) => {
  return (
    <div
      key={book.bookId}
      className="flex flex-col lg:flex-row items-center gap-6 p-6 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      {/* বাম পাশের ইমেজ বক্স */}
      <div className="w-full lg:w-60 h-64 bg-slate-100 rounded-2xl flex items-center justify-center p-4 flex-shrink-0">
        <Image
          src={book.image}
          alt={book.bookName}
          width={130}
          height={170}
          className="h-44 w-auto object-contain drop-shadow-md"
        />
      </div>

      {/* ডান পাশের বিস্তারিত তথ্য */}
      <div className="flex-1 w-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">{book.bookName}</h2>
          <p className="text-slate-600 font-medium text-sm mt-1">
            By : {book.author}
          </p>

          {/* ট্যাগ ও পাবলিশিং সাল */}
          <div className="flex flex-wrap items-center gap-3 my-4">
            <span className="font-bold text-slate-900 text-sm">Tag</span>
            {book.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="bg-emerald-50 text-emerald-600 px-4 py-1 rounded-full text-xs font-semibold"
              >
                #{tag}
              </span>
            ))}
            <div className="flex items-center gap-1.5 text-slate-500 text-sm ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Year of Publishing: {book.yearOfPublishing}</span>
            </div>
          </div>

          {/* প্রকাশক ও পৃষ্ঠা সংখ্যা */}
          <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>Publisher: {book.publisher}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Page {book.totalPages}</span>
            </div>
          </div>
        </div>

        {/* ব্যাজ এবং ভিউ ডিটেইলস বাটন */}
        <div className="flex flex-wrap items-center gap-3 mt-4">
          <span className="bg-sky-100 text-sky-600 px-4 py-2 rounded-full text-xs font-semibold">
            Category: {book.category}
          </span>
          <span className="bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-xs font-semibold">
            Rating: {book.rating}
          </span>
          <Link
            href={`/books/${book.bookId}`}
            className="bg-[#23BE0A] hover:bg-[#1fa709] text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
