import DateComponents from "./components/DateCompenents";
import FromInput from "./components/FromInput";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-700 to-slate-900 w-full h-screen">
        <div className="container max-w-7xl mx-auto">
          <div className="flex pt-9">
            <div className="w-1/3 mx-auto">
              <DateComponents />
            </div>
            <div className="items-center w-2/3 space-y-5">
              <h1 className="text-center text-white text-4xl font-bold mb-8">
                To-Do Web App
              </h1>
              <div className="flex justify-start items-center">
                <div className="w-full bg-slate-200 rounded-lg ">
                  <FromInput />
                </div>
              </div>

              <div className="flex justify-start items-center">
                <div className="w-full rounded-lg ">
                  <ListTodo />
                </div>
              </div>
            </div>
            {/* <div className="bg-red-500">col-span-1</div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
