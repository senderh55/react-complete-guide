import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  // store exacly the same function in memory and not re-create it on every render cycle until the dependencies change.
  // useCallback() will only re-evaluate the function if the dependencies change and will not re-evaluate the function if the dependencies do not change.
  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  // store exacly the same value in memory and not re-create it on every render cycle until the dependencies change.
  // useMemo() will only re-evaluate the function if the dependencies change and will not re-evaluate the function if the dependencies do not change.
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;

// the difference between useCallback() and useMemo() is that useCallback() returns a function and useMemo() returns a value.
