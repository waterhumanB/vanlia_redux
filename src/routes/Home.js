import { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };
  return (
    <>
      <h1>ToDo</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" value={text} />
        <button>ADD</button>
      </form>
    </>
  );
};

export default Home;
