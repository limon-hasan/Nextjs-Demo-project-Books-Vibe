import Image from "next/image";
import logo from "@/assets/book.ico";
import Link from "next/link";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <Link
          href="/books"
          className="font-bold text-slate-700 hover:text-emerald-600 transition-colors text-base"
        >
          Books
        </Link>
      </li>
      <li>
        <Link
          href="/listed-books"
          className="font-bold text-slate-700 hover:text-emerald-600 transition-colors text-base"
        >
          Listed Books
        </Link>
      </li>
      <li>
        <Link
          href="/read-books"
          className="font-bold text-slate-700 hover:text-emerald-600 transition-colors text-base"
        >
          Read Books
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto px-4 md:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-1 mr-2"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-3 shadow-lg space-y-2 border border-slate-100"
            >
              {navLinks}
            </ul>
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 text-xl sm:text-2xl font-extrabold text-slate-900 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <Image
              src={logo}
              alt="Book Vibe logo"
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
            />
            <span>Book Vibe</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
        </div>

        <div className="navbar-end gap-2 sm:gap-3">
          <button className="btn btn-sm sm:btn-md btn-success text-white font-bold rounded-lg px-3 sm:px-5">
            Sign in
          </button>
          <button className="btn btn-sm sm:btn-md btn-error text-white font-bold rounded-lg px-3 sm:px-5">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
