import { Pages } from "./components/Pages";
import Footer from "./components/common/Footer";
import MenuBar from "./components/common/MenuBar";
import FloatNotice from "./components/common/FloatNotice";

import Access from "./components/access/Access";
import Event from "./components/event/Event";
import Home from "./components/home/Home";
import Map from "./components/map/Map";
import Project from "./components/project/Project";
import Credit from "./components/credit/Credit";
import ProjectDetail from "./components/project/projectDetail/ProjectDetail";

import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  //<FloatNotice>第一体育館にて<br />「青春がしたい平川」<br />公演中！</FloatNotice>

  return (
    <div id="webBackGround" className="responsiveWidth">
      <BrowserRouter>
        <Routes>
          <Route exact path={Pages.access.path} element={<Access />} />
          <Route exact path={Pages.event.path} element={<Event />} />
          <Route exact path={Pages.home.path} element={<Home />} />
          <Route exact path={Pages.map.path} element={<Map />} />
          <Route exact path={Pages.project.path} element={<Project />} />
          <Route exact path={Pages.credit.path} element={<Credit />} />
          <Route exact path={Pages.projectDetail.path} element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>

      <Footer />
      <MenuBar />
    </div>
  );
}

export default App;
