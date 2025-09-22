import React from "react";

import Conversation from "../components/Conversation";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <div className="flex flex-col gap-2 ">
      <Header />

      <div className="p-4 flex flex-col gap-6 mb-20">
        <h2 className="text-2xl font-bold mb-2">Chats</h2>
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
    </div>
  );
}

export default Home;
