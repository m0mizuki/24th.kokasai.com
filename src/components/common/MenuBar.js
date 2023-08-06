import { Pages } from "../Pages";
import menuIcon from "../../img/menuIcon.png";
import "./commonStyle.css";

function MenuBar() {

    function changeScene(path) {
        const target = document.getElementById("changeSceneObject");
        if (target.className == null || target.className == "") {
            target.className = "changeSceneMotion";
            setTimeout(() => {
                //alert(path);
                window.location.assign(path);
            }, 1000);
        }
    }

    return (
        <>
            <div id="menuBar">
                <div className="menuButtons" id="accessButton">
                    <input type="image" src={menuIcon} className="menuImages" onClick={()=>changeScene(Pages.access.path)} />
                    <p className="menuTexts">アクセス</p>
                </div>
                <div className="menuButtons" id="eventButton">
                    <input type="image" src={menuIcon} className="menuImages" onClick={()=>changeScene(Pages.event.path)} />
                    <p className="menuTexts">体育館企画</p>
                </div>
                <div className="menuButtons" id="homeButton">
                    <input type="image" src={menuIcon} className="menuImages" onClick={()=>changeScene(Pages.home.path)} />
                    <p className="menuTexts">ホーム</p>
                </div>
                <div className="menuButtons" id="mapButton">
                    <input type="image" src={menuIcon} className="menuImages" onClick={()=>changeScene(Pages.map.path)} />
                    <p className="menuTexts">マップ</p>
                </div>
                <div className="menuButtons" id="projectButton">
                    <input type="image" src={menuIcon} className="menuImages" onClick={()=>changeScene(Pages.project.path)} />
                    <p className="menuTexts">企画</p>
                </div>
            </div>

            <div id="changeSceneObject" className="" />
        </>
    );
}

export default MenuBar;  