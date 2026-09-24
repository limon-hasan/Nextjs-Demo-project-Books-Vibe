import { IBook } from "@/types/booksTypes";
import BooksCard from "../shared/BooksCard";

const getBooks = async (): Promise<IBook[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data: ", error);
    return [];
  }
};
const Books = async () => {
  const booksData = await getBooks();
  console.log("size: ", booksData);

  return (
    // max-w-6xl সরিয়ে ফেলা হয়েছে যাতে অনুভূমিকভাবে ব্যানার ও স্ক্রিনের সাথে পুরোপুরি চওড়া হয়
    <section className="container mx-auto px-4 my-12">
      {/* টাইটেল এবং সাব-টাইটেল সেকশন */}
      <div className="text-center mb-10 space-y-2">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-500">
          {" "}
          Our Collection
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Explore Popular Books
        </h2>
        <p className="text-sm md:text-base text-gray-500">
          Discover amazing stories, funs
        </p>
      </div>

      {/* ৪ কলামের রেসপনসিভ গ্রিড */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {booksData.slice(0,7).map((book: IBook, indx) => (
          <BooksCard key={indx} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
