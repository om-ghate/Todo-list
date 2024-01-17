"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  // Submit Handler Function

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title);
    // console.log(desc);
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) =>{
    let copyTask = [...mainTask];
    copyTask.splice(i,1);
    setMainTask(copyTask);
  }

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between m-4">
          <div className="flex items-center justify-between w-2/3 m-4">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button onClick={()=>{
            deleteHandler(i)
          }} className="bg-red-400 text-white px-4 py-2 rounded font-bold">
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1
        className="
      bg-black
      text-white
      p-5
      text-5xl
      font-bold
      text-center
      "
      >
        Om's Todo List
      </h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="
        text-2xl
        border-zinc-800
        border-4
        m-8
        px-4
        py-2
        "
          placeholder="Enter Title here"
          value={title}
          onChange={(e) => {
            // console.log(e.target.value)
            setTitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="
          text-2xl
          border-zinc-800
          border-4
          m-8
          px-4
          py-2
          "
          placeholder="Enter Description here"
          value={desc}
          onChange={(e) => {
            // console.log(e.target.value)
            setDesc(e.target.value);
          }}
        />

        <button
          className="
        bg-black
        text-white
        text-2xl
        px-4
        py-3
        m-5
        rounded
        font-bold
        "
        >
          Add Task
        </button>
      </form>

      <hr />

      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
