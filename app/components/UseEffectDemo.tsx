"use client";

import { useState, useEffect } from "react";

export default function UsestateUseEffectDemo() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(num1 * num2);
  }, [num1, num2]);

  return (
    <main className="min-h-screen flex justify-center items-start bg-gray-100 p-10">
      
      {/* ONE BIG BOX */}
      <div className="bg-white border p-6 w-[500px] text-black space-y-6">

        {/* TITLE */}
        <h1 className="text-2xl font-bold">
          useEffect - Complete Demo
        </h1>

        {/* COUNT BUTTON */}
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment Count: {count}
        </button>

        {/* NAME INPUT */}
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />

        {/* NUMBER INPUTS IN SAME ROW */}
        <div className="flex gap-4">
          <input
            type="number"
            value={num1}
            placeholder="Price"

            onChange={(e) => setNum1(Number(e.target.value))}
            className="border p-2 w-1/2"
          />

          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(Number(e.target.value))}
            className="border p-2 w-1/2"
          />
        </div>

        {/* TOTAL */}
        <p className="font-semibold">
          Total: {total}
        </p>

      </div>
    </main>
  );
}
