import { useState } from "preact/hooks";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p class="text-yellow-300 text-xl ml-4">Counter: {count}</p>
      <button
        class="border px-4 py-2 text-xl"
        onClick={() => setCount((count) => count + 1)}
      >
        +
      </button>
      <button
        class="border px-4 py-2 text-xl"
        onClick={() => setCount((count) => count - 1)}
      >
        -
      </button>
    </>
  );
}
