"use client";

import { useCounter } from "@/app/hooks/useCounter";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  console.log("Rendering Home Component");

  const [count, _setCount] = useState(0);
  const renders = useRef(0);
  const counter = useCounter();

  useEffect(() => {
    renders.current++;
    console.log(`REnders ${renders.current} times`);
  }, []);

  return (
    <main className="p-6 space-y-4">
      <p>Count: {counter.count}</p>
      <p>Count: {count}</p>
      <button
        className="px-4 py-2 bg-black text-white"
        onClick={counter.increment}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 bg-black text-white"
        onClick={counter.decrement}
      >
        Decrement
      </button>
    </main>
  );
}
