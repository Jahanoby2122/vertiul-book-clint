import React, { useEffect, useMemo, useState } from "react";
import { useLoaderData } from "react-router"; // ✅ সঠিক ইমপোর্ট
import BookShelfCard from "./BookShelfCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../assets/shelfBanner.jpg";

// ছোট utility: স্ট্রিং normalize (lowercase, extra space, hyphen/underscore ঠিক করা)
const normalize = (v) =>
  (v ?? "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ");

const STATUS_OPTIONS = [
  { value: "", label: "Select all" },
  { value: "read", label: "Read" },
  { value: "reading", label: "Reading" },
  { value: "want to read", label: "Want to Read" },
];

const BookShelf = () => {
  // loader data আসতেই পারে undefined/null; তাই guard রাখছি
  const loaded = useLoaderData();
  const data = Array.isArray(loaded) ? loaded : [];

  // UI states
  const [searchText, setSearchText] = useState("");
  const [filterbook, setFilterBook] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const booksPerPage = 8;

  // সব filtering এখানে — কোনো derived state নয়, তাই stale bug হবে না
  const filteredBooks = useMemo(() => {
    let list = data;

    if (filterbook) {
      list = list.filter(
        (book) => normalize(book?.reading_status) === filterbook
      );
    }

    if (searchText) {
      const q = normalize(searchText);
      list = list.filter((book) => normalize(book?.booktitle).includes(q));
    }

    return list;
  }, [data, filterbook, searchText]);

  // filter/search পরিবর্তন হলে প্রথম পেজে ফেরত যাই
  useEffect(() => {
    setCurrentPage(1);
  }, [filterbook, searchText]);

  // Pagination হিসাব
  const totalPages = Math.max(
    1,
    Math.ceil(filteredBooks.length / booksPerPage)
  );
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const indexOfLastBook = safePage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const goToPage = (page) => {
    const p = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(p);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Banner */}
      <div className="relative top-25 bottom-15">
        <img
          className="mx-auto rounded-lg shadow-md w-full object-cover"
          src={img1}
          alt="Bookshelf Illustration"
        />
        <div
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 rounded-lg"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <h1 className="text-white text-4xl font-bold mb-2">Bookshelf</h1>
          <p className="text-white hidden md:block text-lg max-w-xl">
            Here you can store all your books, view your reading list, and find
            detailed information about each book in one place.
          </p>
        </div>
      </div>

      <br />
      <br />

      {/* Search & Filter */}
      <div className="mt-20 mb-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Search Input */}
        <div className="md:col-span-8 col-span-12">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-4 h-4 text-gray-500"
              >
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
              </svg>
            </span>
            <input
              type="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-4 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
        </div>

        {/* Filter Dropdown */}
        <div className="md:col-span-4 col-span-12">
          <select
            value={filterbook}
            onChange={(e) => setFilterBook(e.target.value)}
            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 text-base-content"
          >
            {STATUS_OPTIONS.map((opt) => (
              <option key={opt.value || "all"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Book Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentBooks.map((book, i) => (
          <BookShelfCard
            key={
              book?._id ||
              book?.id ||
              book?.bookId ||
              `${normalize(book?.booktitle)}-${i}`
            }
            book={book}
          />
        ))}
      </div>

      {/* Empty state */}
      {filteredBooks.length === 0 && (
        <div className="text-center text-sm text-gray-500 py-8">
          No books found.
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2 pb-8">
          {/* Prev Button */}
          <button
            onClick={() => goToPage(safePage - 1)}
            disabled={safePage === 1}
            className={`px-3 py-1 rounded flex items-center gap-1 ${
              safePage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            <FaArrowLeft /> Prev
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 rounded ${
                safePage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => goToPage(safePage + 1)}
            disabled={safePage === totalPages}
            className={`px-3 py-1 rounded flex items-center gap-1 ${
              safePage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Next <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default BookShelf;
