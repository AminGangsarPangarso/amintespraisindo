import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


 

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const handleLogin = (event) => {
    event.preventDefault();

    const userData = database.find((user) => user.username === username);


    if (userData) {
      if (userData.password === password) {
        
        navigate("/beranda");
      } else {
        setError("Invalid password");
      }
    } else {
      setError("Invalid username");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form onSubmit={handleLogin} className="flex max-w-md flex-col gap-4 w-full">
        <div>
          <div className="mb-2 block text-left">
            <Label htmlFor="username" value="Username" />
          </div>
          <TextInput
            id="username"
            placeholder="Masukkan username"
            required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <div className="mb-2 block text-left ">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            id="password"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <div className="text-red-500 text-md font-medium">{error}</div>}

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
