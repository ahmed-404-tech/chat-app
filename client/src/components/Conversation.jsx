import React from "react";

function Conversation() {
  return (
    <div className="flex gap-4">
      <img src="/images/avatars/avatar.png" alt="avatar" className="w-14" />

      <div className="flex flex-col gap-2 items-start justify-center w-full">
        <div className="flex flex-row justify-between w-full items-center pr-2">
          <h3 className="text-md font-bold text-ellipsis break-words whitespace-nowrap max-w-44 overflow-hidden">
            Ahmed Abdulsalam
          </h3>
          <p className="text-sm text-text-200">03:24</p>
        </div>
        <div className="flex flex-row justify-between w-full items-center pr-2">
          <p className="text-sm text-text-200 text-ellipsis break-words whitespace-nowrap max-w-40 overflow-hidden">
            Hello, How are you? imaflsfsdfsdfsdfsdf
          </p>

          <p className="bg-primary text-white rounded-full flex justify-center items-center text-center text-sm w-6 h-6">3</p>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
