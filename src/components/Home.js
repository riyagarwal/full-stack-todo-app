import {useState} from "react";
import axios from "axios";

const Home = () => {
  const [todo, setTodo] = useState("");

  //   taking input from user
  const handleInput = (e) => {
    setTodo(e.target.value);
  };

//   adding todo of user to database
  const addTodo = () => {
    axios.post("http://localhost:8001/addtodo", {
      task: todo,
      isCompleted: false,
      username: 'riya2'
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todo"
        onChange={(e) => handleInput(e)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default Home;
