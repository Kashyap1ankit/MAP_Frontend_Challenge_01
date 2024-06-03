import "./App.css";
import data from "./data/data.json";
import Card from "./components/card";
import Loader from "./components/loader";
import { useEffect, useState } from "react";
import { ThemeContext } from "./context";
import ThemeButton from "./components/theme";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-red-500">
        <Loader />
      </div>
    );
  }

  return (
    <div className="dark:bg-black">
      <ThemeContext.Provider value={theme}>
        <ThemeButton fn={toggleTheme} />

        <div className="w-full flex justify-btween xsm:px-4 xsm:py-2 xl:px-8 xl:py-2 overflow-x-scroll no-scrollbar">
          {data.map((e: any) => {
            const imageKey = Object.keys(e).find((key) =>
              key.startsWith("SamplePic")
            );
            const imageUrl = imageKey ? e[imageKey] : "";
            return (
              <Card
                title={e.title}
                image={imageUrl}
                price={e.price}
                date={e.date}
                location={e.location}
                daytonight={e.daytonight}
                tag={e.tag}
                key={e.id}
              />
            );
          })}
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
