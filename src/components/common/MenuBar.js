import { Pages } from "../Pages";

import "./commonStyle.css";

function MenuBar() {

    return (
        <>
            <div id="menuBar" className="responsiveWidth menuBar">
                <div className="menuButtons" id="accessButton">
                    <a href={Pages.access.path}><img className="menuImages" src={Pages.access.icon} /></a>
                    <div className="menuTextArea">
                        <span className="menuText">{Pages.access.displayName}</span>
                    </div>
                </div>

                <div className="menuButtons" id="eventButton">
                    <a href={Pages.event.path}><img className="menuImages" src={Pages.event.icon} /></a>
                    <div className="menuTextArea">
                        <span className="menuText">{Pages.event.displayName}</span>
                    </div>
                </div>

                <div className="menuButtons" id="homeButton">
                    <a href={Pages.home.path}><img className="menuImages" src={Pages.home.icon} /></a>
                    <div className="menuTextArea">
                        <span className="menuText">{Pages.home.displayName}</span>
                    </div>
                </div>

                <div className="menuButtons" id="mapButton">
                    <a href={Pages.map.path}><img className="menuImages" src={Pages.map.icon} /></a>
                    <div className="menuTextArea">
                        <span className="menuText">{Pages.map.displayName}</span>
                    </div>
                </div>

                <div className="menuButtons" id="projectButton">
                    <a href={Pages.project.path}><img className="menuImages" src={Pages.project.icon} /></a>
                    <div className="menuTextArea">
                        <span className="menuText">{Pages.project.displayName}</span>
                    </div>
                </div>
            </div>

        </>
    );
}

export default MenuBar;  