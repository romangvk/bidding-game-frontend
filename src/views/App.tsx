import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./Join";
import Room from "./Room";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path=":room" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
