import React from "react";

export default function Header({ title, children }) {
  return (
    <header>
      <h1>Gits to Me | {title}</h1>
      {children}
    </header>
  );
}
