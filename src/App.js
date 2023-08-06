import { Pages } from "./components/Pages";
import Footer from "./components/common/Footer";
import MenuBar from "./components/common/MenuBar";

import Access from "./components/access/Access";
import Event from "./components/event/Event";
import Home from "./components/home/Home";
import Map from "./components/map/Map";
import Project from "./components/project/Project";

import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div id="webBackGround">
      <BrowserRouter>
        <Switch>
          <Route exact path={Pages.access.path}><Access /></Route>
          <Route exact path={Pages.event.path}><Event /></Route>
          <Route exact path={Pages.home.path}><Home /></Route>
          <Route exact path={Pages.map.path}><Map /></Route>
          <Route exact path={Pages.project.path}><Project /></Route>
        </Switch>
      </BrowserRouter>

      <Footer />
      <MenuBar />
    </div>
  );
}

export default App;
