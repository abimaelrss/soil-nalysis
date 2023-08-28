import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { New } from "../pages/New";
import { Details } from "../pages/Details";
import { Profile } from "../pages/Profile";

import { Properties } from "../pages/Properties";
import { NewProperty } from "../pages/NewProperty";
import { Areas } from "../pages/Areas";
import { NewArea } from "../pages/NewArea";
import { Analyzes } from "../pages/Analyzes";
import { NewAnalysis } from "../pages/NewAnalysis";
import { Reports } from "../pages/Reports";
import { NewReport } from "../pages/NewReport";
import { Notes } from "../pages/Notes";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
      
      <Route path="/properties" element={<Properties />} />
      <Route path="/newProperty" element={<NewProperty />} />
      <Route path="/areas" element={<Areas />} />
      <Route path="/newArea" element={<NewArea />} />
      <Route path="/analyzes" element={<Analyzes />} />
      <Route path="/newAnalysis" element={<NewAnalysis />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/newReport" element={<NewReport />} />
    </Routes>
  );
}