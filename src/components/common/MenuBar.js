import { Pages } from "../Pages";
import menuIcon from "../../img/astronaut.png";
import "./commonStyle.css";
import "./transitionalMotion/transitionalMotionStyle.css";
//import "../../../src/index.css"; //書かなくても親が持ってたら大丈夫？

import Bubble from "./transitionalMotion/Bubble";

function MenuBar() {

    return (
        <>
            <div id="menuBar" className="responsiveWidth menuBar">
                <div className="menuButtons" id="accessButton">
                    <a href={Pages.access.path}><img className="menuImages" src={menuIcon} /></a>
                    <p className="menuTexts">{Pages.access.displayName}</p>
                </div>

                <div className="menuButtons" id="eventButton">
                    <a href={Pages.event.path}><img className="menuImages" src={menuIcon} /></a>
                    <p className="menuTexts">{Pages.event.displayName}</p>
                </div>

                <div className="menuButtons" id="homeButton">
                    <a href={Pages.home.path}><img className="menuImages" src={menuIcon} /></a>
                    <p className="menuTexts">{Pages.home.displayName}</p>
                </div>

                <div className="menuButtons" id="mapButton">
                    <a href={Pages.map.path}><img className="menuImages" src={menuIcon} /></a>
                    <p className="menuTexts">{Pages.map.displayName}</p>
                </div>

                <div className="menuButtons" id="projectButton">
                    <a href={Pages.project.path}><img className="menuImages" src={menuIcon} /></a>
                    <p className="menuTexts">{Pages.project.displayName}</p>
                </div>
            </div>

        </>
    );
}

export default MenuBar;  