import React from "react";

function Search() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Search for users</h2>
      <div className="relative">
        <img
          src="images/icons/search-dark.gif"
          alt=""
          width={30}
          className="absolute top-4 left-4"
        />
        <input
          type="text"
          placeholder="Search"
          className="w-full h-16 border-2 border-bg-300 rounded-full pl-14 text-lg md:outline-none"
        />
      </div>

      <div className="flex justify-center items-center flex-col gap-6 mt-24">
        <img src="/images/not-found/not-found.svg" alt="" width={200} />
        <p className="text-2xl">No user found</p>
      </div>
    </div>
  );
}

export default Search;
