import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Content/Home";

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="/page/1" />} />
         <Route exact path="/page/:id" element={<Home />} />
      </Routes>
   );
};

export default App;
