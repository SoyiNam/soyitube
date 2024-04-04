import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

// react-icons
import { BsYoutube } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { CiDark } from "react-icons/ci";

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <header className="w-full flex p-4 mb-4 text-2xl border-b border-zinc-600">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">SOYITUBE</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
      <button className="bg-white rounded-full px-3 box-border">
        <CiDark className="text-black" />
      </button>
    </header>
  );
}
