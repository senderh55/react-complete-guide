import { json, redirect } from "react-router-dom";

import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams; // request.url is the URL of the request, which is the URL of the page that the user is currently on
  const mode = searchParams.get("mode") || "login"; // if the user is on the /auth page, the mode is login, otherwise it's signup

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  const data = await request.formData(); // Using Form tag is AuthForm.js we got the data with .fromData (routing)
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  // mode is either login or signup
  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData), // the body of the request is the authData object
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }

  const resData = await response.json();
  const token = resData.token;

  // store token in the browser's local storage and is expiration after 1 hour
  localStorage.setItem("token", token); // store the token in the browser's local storage
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());
  // soon: manage that token
  return redirect("/");
}
