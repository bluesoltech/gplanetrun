import { useState } from "react";

function EventSG1() {
  const [count, setCount] = useState(278);
  const [done, setDone] = useState(false);

  function handleCount() {
    if (!done) setCount(count + 1);

    setDone(true);
  }
  return (
    <div className="flex-col w-1/5  p-3">
      <div className="bg-gray-300 m-1 px-3 py-2 flex-col justify-evenly">
        <span className=" w-full flex justify-center my-2">
          <div className=" text-xl">Category</div>
        </span>
        <div className="w-full p-2 my-3 bg-white  flex items-center justify-between rounded-xl">
          <div>5 KM Marathon</div>
          <a
            className="font-bold bg-red-400 hover:bg-red-300 p-1 mr-2 rounded-lg px-3 text-white"
            href="/register"
          >
            ₹499
          </a>
        </div>
        <div className="w-full p-2 my-3 bg-white flex items-center justify-between rounded-xl">
          <div>10 KM Marathon</div>
          <a
            className="font-bold bg-red-400 hover:bg-red-300 p-1 mr-2 rounded-lg px-3 text-white"
            href="/register"
          >
            ₹699
          </a>
        </div>
      </div>
      <div className="bg-gray-300 m-1 p-3 flex items-center justify-around">
        {done ? (
          <>
            <button
              className="text-lg p-2 bg-green-200 rounded-lg"
              onClick={handleCount}
            >
              Interested
            </button>
            <div>{count}</div>
          </>
        ) : (
          <>
            <button
              className="text-lg border-2 p-2 border-solid hover:bg-white rounded-lg"
              onClick={handleCount}
            >
              Interested?
            </button>
            <div>{count}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default EventSG1;
