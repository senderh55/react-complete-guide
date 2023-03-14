import { useState, useCallback } from "react";

// custom hook to handle http requests and state management
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    // useCallback to avoid infinite loop in useEffect in App.js
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        // requestConfig.url is required
        method: requestConfig.method ? requestConfig.method : "GET", // default method is GET if not specified
        headers: requestConfig.headers ? requestConfig.headers : {}, // default headers is empty object if not specified
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null, // default body is null if not specified
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data); // applyData is a function that is passed in as an argument
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []); // no dependencies becouse all the data that operating on is passed in as parameters
  return {
    // return an object with the state and the function
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
