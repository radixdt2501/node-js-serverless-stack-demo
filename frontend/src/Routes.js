import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UnauthenticatedRoute><Login /></UnauthenticatedRoute>} />
      <Route path="/signup" element={<UnauthenticatedRoute><Signup /></UnauthenticatedRoute>} />
      <Route path="/notes/new" element={<AuthenticatedRoute><NewNote /></AuthenticatedRoute>} />
      <Route path="/notes/:id" element={<AuthenticatedRoute><Notes /></AuthenticatedRoute>} />
      <Route path="/settings" element={<AuthenticatedRoute><Settings /></AuthenticatedRoute>} />
      {/* Finally, catch all unmatched routes */}
      <Route path="*" element={<NotFound />} />
    </ReactRoutes>
  );
}
