import { PlusCircleIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { addBookmarkItem } from "../redux/features/bookmarkSlice";

const Books = ({ image, title, authors, data }) => {
  const dispatch = useDispatch();

  const addBookmarkHandler = (data) => {
    dispatch(addBookmarkItem(data));
  };

  // const filteredBooks = data?.filter((search) => search.title.toLowerCase().includes(value.toLowerCase()) || search.authors.toString().toLowerCase().includes(value.toLowerCase()));
  return (
    <div className="text-center p-0 md:mx-0 mx-auto">
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center relative transform ">
          <div className="top-0 right-0 absolute">
            <button onClick={() => addBookmarkHandler(data)} className="inline-flex rounded-bl-lg border-blue-storial border-l-2 border-b-2 border-t border-r bg-white text-center">
              <PlusCircleIcon className="h-6 w-6 text-black mx-2" />
            </button>
          </div>
          <img src={image} alt={title} className="border-2 border-blue-storial h-[15rem] w-[12rem] transition-all" />
        </div>
        <span className="py-0.5 mx-0.5 text-lg font-semibold truncate w-1/2 hover:cursor-pointer">{title}</span>
        <span className="py-0.5 mx-0.5 truncate w-3/4">{authors}</span>
      </div>
    </div>
  );
};

export default Books;
