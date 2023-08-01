import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/loader/Loader";

function App() {
  // loader state
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <h1 className="welcome-text">Welcome to Preloading Application! 👋🏻</h1>
  );
}

export default App;
