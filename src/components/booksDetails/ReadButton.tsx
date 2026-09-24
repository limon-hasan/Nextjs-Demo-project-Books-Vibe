"use client";

import { BooksContext } from "@/contexts/BookContext";
import { IBook } from "@/types/booksTypes";
import { useContext } from "react";
import { toast } from "react-toastify";

interface IBookTypes {
  book: IBook;
}
const ReadButton = ({ book }: IBookTypes) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);
  //   console.log("Books provider: ", booksProvider);

  const handleReadBook = () => {
    console.log("read book button triggered...", book);
    // setReadBooks((prevReadBooks : IBook[]) => [...prevReadBooks, book]);
    setReadBooks([...readBooks, book]);
    toast.success(`You have read ${book.bookName}`)
  };

  return (
    <div>
      <button
        onClick={() => handleReadBook()}
        className="btn btn-primary rounded-xl px-6 text-xs font-bold hover:bg-slate-900 hover:text-white transition-all duration-200"
      >
        Read
      </button>
    </div>
  );
};

export default ReadButton;
