import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../redux/features/gbooksAPI";
import { totalBookmarkItems } from "../redux/features/bookmarkSlice";
import { SearchIcon } from "@heroicons/react/outline";
import Books from "./Books";

const GBooksList = () => {
  const [search, setSearch] = useState("react");
  const { data, error, isLoading } = useGetCategoriesQuery(search);
  const dispatch = useDispatch();
  const bookmark = useSelector((state) => state.bookmark);

  useEffect(() => {
    dispatch(totalBookmarkItems());
  }, [bookmark, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="text-center lg:px-8 sm:px-6 px-4">
      <div className="mt-7">
        <div className="mx-2">
          <span htmlFor="categories" className="block mb-2 text-md font-medium text-gray-900">
            Seach books
          </span>
          <form onSubmit={submitHandler} className="flex items-center justify-center lg:px-8 sm:px-6 px-4">
            <button className="flex items-center justify-center px-2 bg-gray-100 rounded-l-full h-9 w-9">
              <SearchIcon className="h-6 w-6 text-gray-900" />
            </button>
            <input onChange={searchHandler} type="search" className="bg-gray-100 rounded-r-full border-2 px-2 py-1 w-auto focus:outline-none focus:bg-white" placeholder="Search Book or Author" />
          </form>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 md:my-10 my-6">
            {isLoading ? (
              <div>Loading data...</div>
            ) : error ? (
              <div>Waiting search input...</div>
            ) : (
              <>
                {data?.map((gbook) => (
                  <div key={gbook.id}>
                    <Books image={gbook.volumeInfo.imageLinks.thumbnail} title={gbook.volumeInfo.title} authors={gbook.volumeInfo.authors} data={gbook} />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GBooksList;
