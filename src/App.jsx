import { Route, Routes } from "react-router-dom";
import "./App.css";

import Room from "./pages/Room";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/room/:roomID" element={<Room></Room>}></Route>
      </Routes>
    </>
  );
}

export default App;
