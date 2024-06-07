const FromInput = () => {
  return (
    <div className="py-2">
      <form className="">
        <div className="flex justify-center items-center">
          <div className="w-8/12 px-2">
            <input
              type="text"
              id="floating-phone-number"
              className="pe-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-4  focus:outline-none focus:ring-0 focus:border-blue-600 pl-2"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Create todo"
            />
          </div>
          <div className="w-2/12 ">
            <input
              type="time"
              id="time"
              className="bg-gray-50 border leading-none  text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5  "
              min="09:00"
              max="18:00"
              //   value="00:00"
              required
            />
          </div>
          <div className="w-2/12 p-1">
            <button
              type="button"
              className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  text-md px-3 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FromInput;
