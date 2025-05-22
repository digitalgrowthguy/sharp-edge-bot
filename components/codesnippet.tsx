"use client";

import React, { useState, useEffect } from "react";

const snippets = [
  `function add(a, b) { return a + b; }`,
  `const fetchData = async (url) => { const res = await fetch(url); return res.json(); };`,
  `const debounce = (fn, d) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), d); }; };`,
  `class Queue { constructor() { this.q = []; } enqueue(x) { this.q.push(x); } }`,
  `const memoize = (f) => { const c = new Map(); return (x) => c.has(x) ? c.get(x) : c.set(x, f(x)); };`,
];

const CodeSnippet: React.FC = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx(Math.floor(Math.random() * snippets.length));
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
      <pre className="bg-black/50 text-green-400 font-mono p-4 rounded-md max-w-xs overflow-auto animate-fadeIn">
        {snippets[idx]}
      </pre>
    </div>
  );
};

export default CodeSnippet;