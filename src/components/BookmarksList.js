import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBookmarkItem, totalBookmarkItems } from "../redux/features/bookmarkSlice";
import { MinusCircleIcon } from "@heroicons/react/outline";

const BookmarksList = () => {
  const bookmark = useSelector((state) => state.bookmark);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalBookmarkItems());
  }, [bookmark, dispatch]);

  const removeBookmarkHandler = (book) => {
    dispatch(removeBookmarkItem(book));
  };

  return (
    <div className="text-center lg:px-8 sm:px-6 px-4">
      <span className="block my-5 text-3xl font-medium text-gray-900">Favourite Books</span>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 md:my-10 my-6">
        {bookmark.bookmarkItems?.map((book) => (
          <div key={book.id} className="text-center p-0 md:mx-0 mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center relative transform hover:cursor-pointer w-auto">
                <img src={book.cover_url} alt={book.title} className="w-3/4 border border:md transition-all" />
                <div className="bottom-0 absolute w-3/4 opacity-0 hover:opacity-100">
                  <button onClick={() => removeBookmarkHandler(book)} className="inline-flex w-full bg-yellow-storial text-blue-storial px-3 py-3 rounded-sm font-semibold text-center">
                    <MinusCircleIcon className="h-6 w-6 text-blue-storial mx-2" />
                    Remove from favourites
                  </button>
                </div>
              </div>
              <span className="py-0.5 mx-0.5 text-lg font-semibold">{book.title}</span>
              <span className="py-0.5 mx-0.5">{book.authors}</span>
              <span className="py-0.5 mx-0.5">ID: {book.category_id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarksList;
