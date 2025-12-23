"use client";

import { useCounter } from "@/app/hooks/useCounter";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  console.log("Rendering Home Component");

  const [count, setCount] = useState(0);
  const renders = useRef(0);

  /* Custom hook */
  const counter = useCounter();

  /* Triggers only when dependancies [count] change */
  useEffect(() => {
    renders.current++;
    console.log(`REnders ${renders.current} times`);
  }, [counter.count]);

  return (
    <main className="p-6 space-y-4">
      <p>Custom hook Count: {counter.count}</p>
      <p>Local Count: {count}</p>
      <button
        className="px-4 py-2 bg-black text-white"
        onClick={() => setCount(count + 1)}
      >
        Increment local count
      </button>
      <button
        className="px-4 py-2 bg-black text-white"
        onClick={counter.increment}
      >
        Increment custom hook count
      </button>
      <button
        className="px-4 py-2 bg-black text-white"
        onClick={counter.decrement}
      >
        Decrement custom hook count
      </button>
    </main>
  );
}
