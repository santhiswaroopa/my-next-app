"use client";

import { useState } from "react";

export default function AddTwoNum() {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");

  const sum = Number(num1) + Number(num2);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-150">
        <h1 className="text-lg font-bold mb-4 text-center ">
          Add Two Numbers
        </h1>

        <input
          type="text"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="border p-2 w-full mb-3"
        />

        <input
          type="text"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="border p-2 w-full mb-3"
        />

        <div className="text-center text-lg font-semibold">
          Sum: <span className="text-green-600">{sum}</span>
        </div>
      </div>
    </main>
  );
}
