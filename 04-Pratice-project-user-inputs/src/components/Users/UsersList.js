import Card from "../UI/Card";
import classes from "./UsersList.module.css";
const UserList = (props) => {
  // map the user array to a list of User components and pass the user data as props
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
