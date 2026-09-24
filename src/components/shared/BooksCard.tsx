import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/types/booksTypes";

interface IBookCardProps {
  book: IBook;
}

const BooksCard = ({ book }: IBookCardProps) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    totalPages,
    yearOfPublishing,
    publisher,
  } = book;

  return (
    // পরিবর্তন ১: হোভারে কার্ড লিফট ও শ্যাডো ইফেক্ট
    <div className="group bg-white rounded-2xl p-4 border border-slate-100 hover:border-emerald-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-between">
      {/* বইয়ের ছবি এবং উপরে ওভারলে ব্যাজ */}
      <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={bookName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          // পরিবর্তন ২: হোভারে ইমেজে স্মুথ জুম ইফেক্ট
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* বামপাশে ক্যাটাগরি ব্যাজ */}
        <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-700 shadow-xs">
          {category}
        </span>

        {/* ডানপাশে ডার্ক রেটিং ব্যাজ */}
        <span className="absolute top-2.5 right-2.5 bg-slate-900/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1 shadow-xs">
          <span className="text-amber-400">★</span> {rating.toFixed(1)}
        </span>
      </div>

      {/* কার্ড কনটেন্ট */}
      <div className="flex-1 flex flex-col justify-between pt-3">
        <div>
          {/* হ্যাশট্যাগসমূহ */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* বইয়ের নাম */}
          <h3
            className="font-bold text-slate-900 text-base leading-snug line-clamp-1 group-hover:text-emerald-600 transition-colors duration-200"
            title={bookName}
          >
            {bookName}
          </h3>

          {/* লেখকের নাম */}
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            by {author}
          </p>
        </div>

        {/* ৩টি কলামে মেটা-ইনফো (Pages, Published, Publisher) */}
        <div className="grid grid-cols-3 gap-2 my-4 text-left border-t border-slate-100/80 pt-3">
          <div>
            <p className="text-[10px] text-slate-400 uppercase tracking-tight">
              Pages
            </p>
            <p className="text-xs font-bold text-slate-700 mt-0.5">
              {totalPages}
            </p>
          </div>

          <div>
            <p className="text-[10px] text-slate-400 uppercase tracking-tight">
              Published
            </p>
            <p className="text-xs font-bold text-slate-700 mt-0.5">
              {yearOfPublishing}
            </p>
          </div>

          <div>
            <p className="text-[10px] text-slate-400 uppercase tracking-tight">
              Publisher
            </p>
            <p
              className="text-xs font-bold text-slate-700 mt-0.5 truncate"
              title={publisher}
            >
              {publisher}
            </p>
          </div>
        </div>

        {/* পরিবর্তন ৩: হোভারে কালার চেঞ্জ বাটন */}
        <Link
          href={`/books/${bookId}`}
          className="w-full text-center py-2.5 rounded-xl bg-[#0f172a] hover:bg-[#00d290] text-white hover:text-slate-950 text-xs font-semibold shadow-xs hover:shadow-md transition-all duration-300"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default BooksCard;
