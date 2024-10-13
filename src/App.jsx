import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isInputValid, setIsInputValid] = useState(false);
  const [error, setError] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      setIsInputValid(true);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isInputValid ? (
        <p>Welcome, {username}!</p>
      ) : (
        <>
          <p>{error}</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              value={username}
              onChange={handleUsername}
              required
            />
            <br />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={handlePassword}
              required
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
