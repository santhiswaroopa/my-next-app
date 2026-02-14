"use client";

import { useContext } from "react";
import { AppContext } from "./Appcontext";

export default function ChildTwo() {
  const info = useContext(AppContext);

  return (
    <div className="border p-4">
      <p>Name: {info.name}</p>
      <p>Age: {info.age}</p>
      <p>Score: {info.score}</p>
    </div>
  );
}
