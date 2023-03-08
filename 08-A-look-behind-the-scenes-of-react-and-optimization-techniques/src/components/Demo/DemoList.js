import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { items } = props;
  // useMemo() will only re-evaluate the function if the dependencies change and will not re-evaluate the function if the dependencies do not change.
  // store exacly the same value in memory and not re-create it on every render cycle until the dependencies change.
  const sortedList = useMemo(() => {
    console.log("Items sorted");
    return items.sort((a, b) => a - b);
  }, [items]); // only if items (from props) change the function will be re-evaluated and the value will be stored in memory
  console.log("DemoList RUNNING");

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
