import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBookmarkItem, totalBookmarkItems } from "../redux/features/bookmarkSlice";
import { ArrowLeftIcon, MinusCircleIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

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
      {bookmark.bookmarkItems.length === 0 ? (
        <NavLink to="/" className="flex items-center justify-center hover:underline">
          <ArrowLeftIcon className="h-6 w-6 text-blue-storial mx-2" />
          Search your favourites books
        </NavLink>
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 md:my-10 my-6">
          {bookmark.bookmarkItems?.map((gbook) => (
            <div key={gbook.id} className="text-center p-0 md:mx-0 mx-auto">
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center relative transform ">
                  <div className="top-0 right-0 absolute">
                    <button onClick={() => removeBookmarkHandler(gbook)} className="inline-flex rounded-bl-lg border-blue-storial border-l-2 border-b-2 border-t border-r bg-white text-center">
                      <MinusCircleIcon className="h-6 w-6 text-blue-storial mx-2" />
                    </button>
                  </div>
                  <img src={gbook.volumeInfo.imageLinks.thumbnail} alt={gbook.volumeInfo.title} className="border-2 border-blue-storial h-[15rem] w-[12rem] transition-all" />
                </div>
                <span className="py-0.5 mx-0.5 text-lg font-semibold truncate w-1/2 hover:cursor-pointer">{gbook.volumeInfo.title}</span>
                <span className="py-0.5 mx-0.5 truncate w-3/4">{gbook.volumeInfo.authors}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookmarksList;
