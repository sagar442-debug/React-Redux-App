import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "../redux/posts/postsSlice";
import { nanoid } from "@reduxjs/toolkit";

function Input() {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const authorChange = (e) => setAuthor(e.target.value);
  const titleChange = (e) => setTitle(e.target.value);
  const contentChange = (e) => setContent(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    const id = nanoid(8);

    const post = { id, title, author, content };

    console.log(post);
    dispatch(postAdded(post));
    setAuthor("");
    setTitle("");
    setContent("");
  };

  const checkDisabled = Boolean(author) && Boolean(title) && Boolean(content);

  return (
    <div>
      <h1 className="my-3 text-5xl font-semibold">Add a new Post</h1>
      <form className="flex flex-col text-2xl my-10">
        <label className="" htmlFor="title">
          Post Title:
        </label>
        <input
          onChange={titleChange}
          className="text-black outline-none p-2"
          type="text"
          id="title"
          value={title}
        />
        <label className="mt-4" htmlFor="author">
          Author:
        </label>
        <input
          onChange={authorChange}
          className="text-black outline-none p-2"
          type="text"
          id="author"
          value={author}
        />
        <label className="mt-4" htmlFor="content">
          Content:
        </label>
        <textarea
          onChange={contentChange}
          className="text-black outline-none p-2"
          type="text"
          id="content"
          value={content}
        />
        <button
          onClick={onSubmit}
          className={`py-2 bg-white text-black mt-4 rounded-xl ${
            !checkDisabled ? "opacity-70" : ""
          }`}
          disabled={!checkDisabled}
        >
          Save Post
        </button>
      </form>
    </div>
  );
}

export default Input;
