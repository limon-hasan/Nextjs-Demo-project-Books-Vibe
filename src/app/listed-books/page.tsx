"use client";

import ListedBookCard from "@/components/shared/ListedBookCard";
import { BooksContext } from "@/contexts/BookContext";
import { IBook } from "@/types/booksTypes";
import { useContext, useState } from "react";

const ListedBooks = () => {
  const { readBooks, wishList } = useContext(BooksContext);
  // console.log("Read books: ", readBooks);
  // console.log("WishList books: ", wishList);
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");
  console.log("sort by: ", sortBy);

  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];
    if (sortBy === "rating") sortedBooks.sort((a, b) => b.rating - a.rating);
    else if (sortBy === "pages")
      sortedBooks.sort((a, b) => a.totalPages - b.totalPages);
    else if (sortBy == "year")
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);

    return sortedBooks;
  };
  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishListedBooks = sortBooks(wishList);
  console.log("sorted read books: ", sortedReadBooks);
  console.log("sorted wishlist books: ", sortedWishListedBooks);

  return (
    <div className="container mx-auto py-[20px]">
      <h2 className="my-4 bg-amber-100 rounded-3xl  py-16 font-bold text-4xl text-center">
        Listed books
      </h2>
      <div className="text-center">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year")
          }
          defaultValue="Pick a Runtime"
          className="select select-success"
        >
          <option disabled={true}>Sort by</option>
          <option value={"rating"}>Rating</option>
          <option value={"pages"}>Number of pages</option>
          <option value={"year"}>Published year</option>
        </select>
      </div>
      <h2>
        {/* Total read books: {readBooks.length} <br />
        Total wishlist books: {wishList.length} */}
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-border">
          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label={`Read books  (${readBooks.length})`}
          />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            {/* Total read books: {readBooks.length} <br /> */}
            {readBooks.length > 0 ? (
              sortedReadBooks.map((book: IBook) => {
                return <ListedBookCard key={book.bookId} book={book} />;
              })
            ) : (
              <p className="text-center text-lg font-semibold ">
                No read books found!
              </p>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label={`Wishlist books (${wishList.length})`}
            defaultChecked
          />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            {/* Total wishlist books: {wishList.length} <br /> */}
            {wishList.length > 0 ? (
              sortedWishListedBooks.map((book: IBook) => {
                return <ListedBookCard key={book.bookId} book={book} />;
              })
            ) : (
              <p className="text-center text-lg font-semibold ">
                No wishlist books found!
              </p>
            )}
          </div>
        </div>
      </h2>
    </div>
  );
};

export default ListedBooks;
