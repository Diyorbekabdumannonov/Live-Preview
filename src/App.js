import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Archive from "./pages/Archive";
import Author from "./pages/Author";
import Business from "./pages/Business";
import Contact from "./pages/Contact";
import Entertainment from "./pages/Entertaiment";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home4 from "./pages/Home4";
import International from "./pages/International";
import Lifestyle from "./pages/Lifestyle";
import Opinion from "./pages/Openion";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";
import SingelImage from "./pages/SingelImage";
import SingelPost from "./pages/SingelPost";
import SingelVideo from "./pages/SingelVideo";
import Sports from "./pages/Sports";
import Travel from "./pages/Travel";
import Video from "./pages/Video";
import Youth from "./pages/Youth";
import Error from "./pages/Error";
import Image from "./pages/Image";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home1 />} />
        <Route path="/" element={<Home1 />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
        <Route path="/home4" element={<Home4 />} />
        <Route path="/international" element={<International />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/opinion" element={<Opinion />} />
        <Route path="/business" element={<Business />} />
        <Route path="/youth" element={<Youth />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/singel-post" element={<SingelPost />} />
        <Route path="/author" element={<Author />} />
        <Route path='/error' element={<Error />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/image" element={<Image />} />
        <Route path="/singel-image" element={<SingelImage />} />
        <Route path="/video" element={<Video />} />
        <Route path="/singel-video" element={<SingelVideo />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;