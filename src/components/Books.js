import { useGetAllBooksQuery } from "../redux/features/booksAPI";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { addBookmarkItem } from "../redux/features/bookmarkSlice";

const Books = ({ categoryId, page, size, value }) => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetAllBooksQuery({ categoryId, page, size });

  const addBookmarkHandler = (book) => {
    dispatch(addBookmarkItem(book));
  };

  const filteredBooks = data?.filter((search) => search.title.toLowerCase().includes(value.toLowerCase()) || search.authors.toString().toLowerCase().includes(value.toLowerCase()));
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 md:my-10 my-6">
      {filteredBooks?.map((book) => (
        <div key={book.id} className="text-center p-0 md:mx-0 mx-auto">
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center relative transform hover:cursor-pointer w-auto">
              <img src={book.cover_url} alt={book.title} className="w-3/4 border border:md transition-all" />
              <div className="bottom-0 absolute w-3/4 opacity-0 hover:opacity-100">
                <button onClick={() => addBookmarkHandler(book)} className="inline-flex w-full bg-yellow-storial text-blue-storial px-3 py-3 rounded-sm font-semibold text-center">
                  <PlusCircleIcon className="h-6 w-6 text-blue-storial mx-2" />
                  Add to favourites
                </button>
              </div>
            </div>
            <span className="py-0.5 mx-0.5 text-lg font-semibold">{book.title}</span>
            <span className="py-0.5 mx-0.5">{book.authors}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
