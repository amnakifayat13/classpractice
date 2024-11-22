"use client";
import Image from "next/image";
import { useState } from "react";

export default function Count() {
  const [state_count, setCount] = useState(0);

  function handleClick() {
    setCount(state_count + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  function handleClick2() {
    setCount(state_count - 1);
  }

  return (
    <main>
      <button onClick={handleClick}>
        increment: {state_count}
      </button>
      <button onClick={handleClick2}>
        decrement
      </button>
    </main>
  );
}
