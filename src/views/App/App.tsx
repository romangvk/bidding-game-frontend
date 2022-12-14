import { helloWorld } from "../../services/functions";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState<string>();

  if (!data) {
    (async () => {
      const response = await helloWorld();
      setData(response.data);
    })();
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data ? data : "Loading..."}
    </div>
  );
};

export default App;
