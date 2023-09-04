import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { New } from "../pages/New";
import { Details } from "../pages/Details";
import { Profile } from "../pages/Profile";

import { Properties } from "../pages/Properties";
import { Property } from "../pages/Property";
import { Areas } from "../pages/Areas";
import { Area } from "../pages/Area";
import { Analysis } from "../pages/Analysis";
import { Analyze } from "../pages/Analyze";
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
      <Route path="/properties/:id" element={<Properties />} />
      <Route path="/property" element={<Property />} />
      <Route path="/property/:id" element={<Property />} />
      <Route path="/areas" element={<Areas />} />
      <Route path="/areas/:id" element={<Areas />} />
      <Route path="/area" element={<Area />} />
      <Route path="/area/:id" element={<Area />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/analysis/:id" element={<Analysis />} />
      <Route path="/analyze" element={<Analyze />} />
      <Route path="/analyze/:id" element={<Analyze />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/newReport" element={<NewReport />} />
    </Routes>
  );
}
