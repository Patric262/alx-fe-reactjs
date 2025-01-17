import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPost from "./components/BlogPost";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home and About Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Dynamic Route for Blog Posts */}
        <Route path="/blog/:postId" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
};

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;

export default App;
