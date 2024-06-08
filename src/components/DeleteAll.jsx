import { deleteAll } from "../store/slices/todoSlice";
import { useDispatch } from "react-redux";

const DeleteAll = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(deleteAll())}
        type="button"
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
      >
        Delete All
      </button>
    </div>
  );
};

export default DeleteAll;
