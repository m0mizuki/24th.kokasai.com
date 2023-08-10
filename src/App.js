import { Pages } from "./components/Pages";
import Footer from "./components/common/Footer";
import MenuBar from "./components/common/MenuBar";

import Access from "./components/access/Access";
import Event from "./components/event/Event";
import Home from "./components/home/Home";
import Map from "./components/map/Map";
import Project from "./components/project/Project";

import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div id="webBackGround" className="responsiveWidth">
      <BrowserRouter>
        <Routes>
          <Route exact path={Pages.access.path} element={<Access />} />
          <Route exact path={Pages.event.path} element={<Event />} />
          <Route exact path={Pages.home.path} element={<Home />} />
          <Route exact path={Pages.map.path} element={<Map />} />
          <Route exact path={Pages.project.path} element={<Project />} />
        </Routes>
      </BrowserRouter>

      <Footer />
      <MenuBar />
    </div>
  );
}

export default App;
