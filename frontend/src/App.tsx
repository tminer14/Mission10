import { useEffect } from "react";
import "./App.css";
import BowlerList from "./BowlerList";

function BowlerHeading() {
  useEffect(() => {
    document.title = "Bowlers"; // Set the page title
  }, []);

  return (
    <>
      <h1>Bowler Database</h1>
    </>
  );
}

function App() {
  return (
    <>
      <BowlerHeading />
      <BowlerList />
    </>
  );
}

export default App;
