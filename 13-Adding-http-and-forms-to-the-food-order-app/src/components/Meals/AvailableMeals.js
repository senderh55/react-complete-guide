import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

// send the data to MealItem component as props
const AvailableMeals = () => {
  // capital letter for component name becouse useEfect is a hook
  const [meals, setMeals] = useState([]); // initial value is an empty array -> we need useState hook becouse we need to update the state (meals) when we get the data from the server
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(); // initial value is undefined

  useEffect(() => {
    // useEffect will run only once when the component is loaded becouse we dont have any dependencies
    const fetchMeals = async () => {
      const response = await fetch(
        // defualt method is GET request
        "https://react-course-http.firebaseio.com//meals.json" // firebase database url - not a real url
      );
      if (!response.ok) {
        throw new Error("Something went wrong!"); // throw error if the response is not ok
      }
      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        // loop through the object and get the data from it and push it to meals array
        const meal = {
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        };
        loadedMeals.push(meal);
      }
      setMeals(loadedMeals); // update the state
      setIsLoading(false); // done loading
    };
    // call the function in async way, in useEffect we cant use async function directly
    fetchMeals().catch((error) => {
      // catch the error if the fetchMeals function throw an error and update the state(fetchMeals function is async function that return a promise)
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  // execute only when the data is loaded and no error
  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
