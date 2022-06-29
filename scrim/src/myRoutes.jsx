import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import { Profile } from "./pages/profile";

export function MyRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path="/" exact />
      <Route element={<Profile />} path="/profile" />
    </Routes>
  );
}
