import React from "react";

function Eventf() {
  return (
    <div className="m-2 flex justify-center">
      <div className="w-4/5 bg-gray-200 p-5">
        <div className="flex justify-around items-center">
          <div className="flex-col">
            <div className="flex items-center">
              <h1 className="text-4xl p-4">Event Name</h1>
              <span className="p-4 pt-6 text-gray-500">Type</span>
            </div>
            <div className="flex-col">
              <div className="text-xl p-4">Headline</div>
              <div className="text-xl p-4">Address</div>
            </div>
          </div>
          <div>
            <button className="bg-white hover:bg-gray-100 bg-cover px-7 py-2 rounded-lg">
              <a className="text-2xl" href="/register">
                Register Now!
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eventf;
