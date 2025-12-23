"use client";

import { useCounter } from "@/app/hooks/useCounter";
import { useState, useEffect, useRef } from "react";
import { StateInputComponent } from "@/app/components/input";

export default function Home() {
  console.log("Rendering Home Component");

  /* Custom hook */
  const counter = useCounter();
  const ref = useRef<HTMLDivElement>(null);

  /* Triggers only when dependancies [count] change */
  useEffect(() => {
    console.log(`effect`);
    ref.current!.style.transform = "translateX(100px)";
  });

  useEffect(() => {
    const id = setInterval(() => {
      console.log(counter.count);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <main className="p-6 space-y-4">
      <div className="bg-red-400" ref={ref}>
        Caja
      </div>
      <p>Custom hook Count: {counter.count}</p>
      <button
        className="px-4 py-2 bg-black text-white"
        onClick={counter.increment}
      >
        Increment count
      </button>
      <button
        className="px-4 py-2 bg-black text-white"
        onClick={counter.decrement}
      >
        Decrement count
      </button>
      <StateInputComponent label="Email" type="email" placeholder="Ingrese su email"></StateInputComponent>
    </main>
  );
}
