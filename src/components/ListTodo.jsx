const ListTodo = () => {
  return (
    <div>
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
            <tr className="bg-white border-b  hover:bg-gray-50 0">
              <th
                scope="row"
                className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                23:50
              </th>
              <td className="px-2 py-4">
                Silversdfdfddddddddddddddddddddddddddddddddddddd
              </td>
              <td className="px-2 py-4">Laptop</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodo;
