import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Profile } from "../pages/Profile";

import { Properties } from "../pages/Properties";
import { Property } from "../pages/Property";
import { Areas } from "../pages/Areas";
import { Area } from "../pages/Area";
import { Analysis } from "../pages/Analysis";
import { Analyze } from "../pages/Analyze";
import { NewReport } from "../pages/NewReport";
import { Interpretation } from "../pages/Interpretation";

import { NotFound } from "../pages/NotFound";

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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

      <Route path="/newReport" element={<NewReport />} />
      <Route path="/interpretation/:id" element={<Interpretation />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
