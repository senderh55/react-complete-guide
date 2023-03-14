import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    // useEffect to fetch tasks from firebase
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        // firebase-specific => "name" contains generated id
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks); // setTasks is a function that is passed in as an argument
    };

    fetchTasks(
      // fecthtask and transformTasks are functions that are passed in as arguments
      {
        url: "https://react-course-http.firebaseio.com/tasks.json", // not a real firebase url
      },
      transformTasks // applydata in use-http.js
    );
  }, [fetchTasks]); // fetchTasks is a function that is passed in as an argument for useEffect to avoid infinite loop becouse of useCallback in use-http.js

  const taskAddHandler = (task) => {
    // task is an object that is passed in as an argument
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
