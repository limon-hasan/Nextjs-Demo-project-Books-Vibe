"use client";

import { BooksContext } from "@/contexts/BookContext";
import { IBook } from "@/types/booksTypes";
import { useContext } from "react";
import { toast } from "react-toastify";

interface IBookTypes {
  book: IBook;
}

const WishListButton = ({ book }: IBookTypes) => {
  const { wishList, setWishList } = useContext(BooksContext);
  //   console.log("Books provider: ", booksProvider);

  const handleWishListBook = () => {
    console.log("Add to WishList book button triggered...", book);
    setWishList([...wishList, book]);
    toast.success(`Your wishlist ${book.bookName} added`);
  };

  return (
    <div>
      <button
        onClick={() => handleWishListBook()}
        className="btn btn-success rounded-xl px-6 text-xs font-bold hover:bg-slate-900 hover:text-white transition-all duration-200"
      >
        Add to WishList
      </button>
    </div>
  );
};

export default WishListButton;
