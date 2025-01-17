import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Profile = () => (
  <div>
    <h1>Profile Page</h1>
    <nav>
      <Link to="details">Profile Details</Link> |{" "}
      <Link to="settings">Profile Settings</Link>
    </nav>
    <Outlet />
  </div>
);

const ProfileDetails = () => <h2>Profile Details</h2>;
const ProfileSettings = () => <h2>Profile Settings</h2>;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
