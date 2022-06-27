import { useState } from "react";
import Slide from "./Components/Slide";
import "./styles.css";

// set this as the
const data = [
  {
    id: 1,
    title: "Intro to React",
    description: "React is a Javascript UI library"
  },
  {
    id: 2,
    title: "Intro to Props",
    description: "Props are just properties"
  },
  {
    id: 3,
    title: "Sate management",
    description: "Learn how to manage state"
  }
];

export default function App() {
  const [ind, setind] = useState(0);
  function handleClick(e) {
    setind(ind - 1);
  }
  function handleBlick(e) {
    setind(ind + 1);
  }
  return (
    <div className="App">
      <h1 data-testid="header">Slides</h1>
      <Slide title={data[ind].title} desc={data[ind].description} />
      <button data-testid="prev" disable={ind == 0} onClick={handleClick}>
        Prev
      </button>
      <button data-testid="next" disable={ind == 2} onClick={handleBlick}>
        Next
      </button>
    </div>
  );
}
