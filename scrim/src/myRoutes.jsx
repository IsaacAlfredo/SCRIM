import { Routes, Route } from "react-router-dom";
import { CreateTeam } from "./pages/CreateTeam";
import Home from "./pages/home";
import { Profile } from "./pages/profile";

export function MyRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path="/" exact />
      <Route element={<Profile />} path="/profile" />
      <Route element={<CreateTeam />} path="/createteam" />
    </Routes>
  );
}
