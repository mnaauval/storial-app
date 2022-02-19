import { useEffect, useState } from "react";
import { useGetAllCategoriesQuery } from "../redux/features/booksAPI";
import Books from "./Books";
import { SearchIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { totalBookmarkItems } from "../redux/features/bookmarkSlice";

const BooksList = () => {
  const [categoryId, setCategoryId] = useState(1);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);
  const [search, setSearch] = useState("");
  const { data, error, isLoading } = useGetAllCategoriesQuery();
  const dispatch = useDispatch();
  const bookmark = useSelector((state) => state.bookmark);

  useEffect(() => {
    dispatch(totalBookmarkItems());
  }, [bookmark, dispatch]);

  const changeCategoriesHandler = (e) => {
    setCategoryId(e.target.value);
  };
  const changeSizeHandler = (e) => {
    setSize(e.target.value);
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="text-center lg:px-8 sm:px-6 px-4">
      <div className="mt-2">
        <div className="mx-2">
          <label htmlFor="categories" className="block mb-2 text-md font-medium text-gray-900">
            Select categories
          </label>
          <select onChange={changeCategoriesHandler} id="categories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-auto py-2.5 px-1">
            {isLoading ? (
              <option>Loading...</option>
            ) : error ? (
              <option>Error...</option>
            ) : (
              <>
                {data?.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </>
            )}
          </select>
          <p>ID: {categoryId}</p>
        </div>
      </div>

      <div className="my-4 ">
        {/* Search Input */}
        <form className="flex items-center justify-center lg:px-8 sm:px-6 px-4">
          <button className="flex items-center justify-center px-2 bg-gray-100 rounded-l-full h-9 w-9">
            <SearchIcon className="h-6 w-6 text-gray-900" />
          </button>
          <input type="search" className="bg-gray-100 rounded-r-full border-2 px-2 py-1 w-auto focus:outline-none focus:bg-white" placeholder="Search Book or Author" onChange={searchHandler} />
        </form>
        <Books categoryId={categoryId} page={page} size={size} value={search} />
      </div>

      <div className="mx-2 pb-20">
        <label htmlFor="size" className="mx-2 text-md font-medium text-gray-900">
          Item per-page
        </label>
        <select onChange={changeSizeHandler} id="size" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-auto p-1">
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
    </div>
  );
};

export default BooksList;
