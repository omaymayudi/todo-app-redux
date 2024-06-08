import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, removeTodo, editTodo } from "../store/slices/todoSlice";
import { FaTrashAlt } from "react-icons/fa";

const ListTodo = () => {
  const todos = useSelector((state) => state.todos.data);
  const loading = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error);
  const dispatch = useDispatch();

  // console.log(todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const hendelRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const hendelEditTodo = (todo) => {
    if (todo.completed == true) {
      dispatch(
        editTodo({
          id: todo.id,
          completed: false,
        })
      );
    } else {
      dispatch(
        editTodo({
          id: todo.id,
          completed: true,
        })
      );
    }
  };

  return (
    <div>
      <div className="text-center text-lg text-white">
        <p>{loading && "Loading..."}</p> <p>{error && "Error"}</p>
      </div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-center text-gray-500 d">
          <thead className="text-xs text-gray-700 uppercase bg-slate-200 ">
            <tr className="">
              <th scope="col" className="px-2 py-3">
                Time
              </th>
              <th scope="col" className="px-2 py-3">
                Todo
              </th>
              <th scope="col" className="px-2 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {todos &&
              todos.map((todo, index) => (
                <tr
                  key={index}
                  className="bg-white border-b  hover:bg-gray-50 0"
                >
                  <th
                    scope="row"
                    className={`px-2 py-4 font-medium text-gray-900 whitespace-nowrap ${
                      todo.completed && "line-through"
                    }`}
                  >
                    {todo.atTime}
                  </th>
                  <td
                    className={`px-2 py-4 font-medium text-gray-900 whitespace-nowrap ${
                      todo.completed && "line-through"
                    }`}
                  >
                    {todo.title}
                  </td>

                  <td className="px-2 py-4">
                    <div className="space-x-2">
                      <div className="inline-flex items-center p-1.5">
                        <button onClick={() => hendelEditTodo(todo)}>
                          <input
                            checked={todo.completed}
                            id="green-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </button>
                      </div>
                      <div className="inline-flex items-center p-1.5 text-sme-4">
                        <button
                          type="button"
                          onClick={() => hendelRemove(todo.id)}
                        >
                          <FaTrashAlt className="text-lg text-red-600" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodo;
