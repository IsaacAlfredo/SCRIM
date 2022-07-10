import { Routes, Route } from "react-router-dom";
import { CreateTeam } from "./pages/CreateTeam";
import Home from "./pages/home";
import { CreateLineUp } from "./pages/LineUp/CreateLineUp";
import { LineUpList } from "./pages/LineUp/LineUpList";
import { Profile } from "./pages/profile";
import { TeamInfo } from "./pages/TeamInfo";
import { NewMember } from "./pages/TeamMembers/NewMember";
import { NotAssignedMembers } from "./pages/TeamMembers/NotAssignedMembers";
import { PlayerMembers } from "./pages/TeamMembers/PlayerMembers";
import { StaffMembers } from "./pages/TeamMembers/StaffMembers";

export function MyRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path="/" exact />
      <Route element={<Profile />} path="/profile" />

      <Route element={<CreateTeam />} path="/createteam" />
      <Route element={<TeamInfo />} path="/teaminfo" />
      <Route element={<StaffMembers />} path="/staff" />
      <Route element={<PlayerMembers />} path="/player" />
      <Route element={<NotAssignedMembers />} path="/notassigned" />
      <Route element={<NewMember />} path="/newmember" />

      <Route element={<CreateLineUp />} path="/createlineup" />
      <Route element={<LineUpList />} path="/lineup" />
    </Routes>
  );
}
