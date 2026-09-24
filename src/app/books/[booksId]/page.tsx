import ReadButton from "@/components/booksDetails/ReadButton";
import WishListButton from "@/components/booksDetails/WishListButton";
import { IBook } from "@/types/booksTypes";
// import { Bokor } from "next/font/google";
import Image from "next/image";

interface IBookIDPageProps {
  params: Promise<{ booksId: string }>;
}
const getBooks = async (): Promise<IBook[]> => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};


const BookIdPage = async ({ params }: IBookIDPageProps) => {
  const { booksId } = await params;
  const booksData = await getBooks();

  // const book = booksData.find(
  //   (book) => booksId === book.bookId.toString(),
  // ) as IBook;

  const book: IBook | undefined = booksData.find(
    (book) => booksId === book.bookId.toString(),
  );
  if (!book) {
    return (
      <div className="container mx-auto my-12 text-center text-xl font-semibold">
        Book not found!
      </div>
    );
  }
  return (
    <div className="container mx-auto max-w-5xl my-10 px-4">
      {/* আধুনিক কার্ড কনটেইনার */}
      <div className="card lg:card-side bg-white border border-slate-100 shadow-xl rounded-3xl overflow-hidden p-6 md:p-10 gap-8">
        {/* বইয়ের ছবির সেকশন */}
        <figure className="bg-slate-50 rounded-2xl p-8 flex items-center justify-center lg:w-5/12 border border-slate-100">
          <div className="relative drop-shadow-2xl transition-transform duration-300 hover:scale-105">
            <Image
              src={book.image}
              alt={book.bookName}
              width={260}
              height={380}
              className="rounded-xl object-contain"
              priority
            />
          </div>
        </figure>

        {/* বইয়ের বিস্তারিত তথ্য (Card Body) */}
        <div className="card-body p-0 lg:w-7/12 justify-between space-y-4">
          <div>
            {/* শিরোনাম ও লেখক */}
            <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {book.bookName}
            </h1>
            <p className="text-slate-500 font-medium text-base mt-1">
              By :{" "}
              <span className="text-slate-800 font-semibold">
                {book.author}
              </span>
            </p>

            {/* ক্যাটাগরি */}
            <div className="border-t border-b border-slate-100 py-2.5 my-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {book.category}
              </span>
            </div>

            {/* রিভিউ */}
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              <span className="font-bold text-slate-800">Review : </span>
              {book.review}
            </p>

            {/* হ্যাশট্যাগ */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-xs font-bold text-slate-700">Tag :</span>
              {book.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* মেটা ইনফো গ্রিড/লিস্ট */}
            <div className="border-t border-slate-100 pt-4 space-y-2 text-sm">
              <div className="flex justify-between max-w-xs text-slate-600">
                <span>Number of Pages:</span>
                <span className="font-bold text-slate-900">
                  {book.totalPages}
                </span>
              </div>
              <div className="flex justify-between max-w-xs text-slate-600">
                <span>Publisher:</span>
                <span className="font-bold text-slate-900">
                  {book.publisher}
                </span>
              </div>
              <div className="flex justify-between max-w-xs text-slate-600">
                <span>Year of Publishing:</span>
                <span className="font-bold text-slate-900">
                  {book.yearOfPublishing}
                </span>
              </div>
              <div className="flex justify-between max-w-xs text-slate-600">
                <span>Rating:</span>
                <span className="font-bold text-slate-900 flex items-center gap-1">
                  <span className="text-amber-500">★</span> {book.rating}
                </span>
              </div>
            </div>
          </div>

          {/* অ্যাকশন বাটনসমূহ */}
          <div className="card-actions flex gap-4 pt-4 border-t border-slate-100">
            <ReadButton book = {book} />
            <WishListButton book = {book} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookIdPage;