import React from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import Home from "./layouts/Home";
const alanKey =
  "a499935abf40c6921a34b5a6ee7886882e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles);
          setNews(articles);
        }
      },
    });
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          margin: "10px 0px ",
        }}
      >
        <img
          src="https://i.ytimg.com/vi/YrRWKgFONoE/maxresdefault.jpg"
          alt="alan"
          style={{
            width: "50%",
            maxHeight: "300px",
            minHeight: "150px",
            textAlign: "center",
            margin: "auto",
            borderRadius:"10px"
          }}
        />
      </div>

      <Home news={news} />
    </div>
  );
}

export default App;
