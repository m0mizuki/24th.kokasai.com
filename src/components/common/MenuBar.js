import { Pages } from "../Pages";
import menuIcon from "../../img/astronaut.png";
import "./commonStyle.css";
import "./transitionalMotion/transitionalMotionStyle.css";
//import "../../../src/index.css"; //書かなくても親が持ってたら大丈夫？

import Bubble from "./transitionalMotion/Bubble";

function MenuBar() {

    const SEGMENT_COUNT = 1; //kokasai.comで公開するときは0にする(多分)

    function changeScene(path) {
        const segments = window.location.href.split('/');
        const pageLocation = segments[SEGMENT_COUNT + 3]; //書き方あとで直す

        if (pageLocation == "access") {
            const target=document.getElementById("bubbleFrame");
            if (target.classList.contains("invisible")) {
                target.classList.remove("invisible");

                document.getElementById("bubbleMotion_0").style.animationDelay="0s";
                document.getElementById("bubbleMotion_0").style.animationName="bubbleAnimationOut_0";
                document.getElementById("bubbleMotion_1").style.animationDelay="0.1s";
                document.getElementById("bubbleMotion_1").style.animationName="bubbleAnimationOut_1";
                document.getElementById("bubbleMotion_2").style.animationDelay="0.2s";
                document.getElementById("bubbleMotion_2").style.animationName="bubbleAnimationOut_2";
                document.getElementById("bubbleMotion_3").style.animationDelay="0.3s";
                document.getElementById("bubbleMotion_3").style.animationName="bubbleAnimationOut_3";
                document.getElementById("bubbleMotion_4").style.animationDelay="0.4s";
                document.getElementById("bubbleMotion_4").style.animationName="bubbleAnimationOut_4";

                setTimeout(() => {
                    //alert(path);
                    //alert(pageLocation);
                    //alert(target.classList);
                    window.location.assign(path);
                }, 2000);
            }
        }
        else {
            const target = document.getElementById("changeSceneObject");
            if (target.className == null || target.className == "") {
                target.classList.add("responsiveWidth");
                target.classList.add("changeSceneMotion");
                setTimeout(() => {
                    //alert(path);
                    /*if (pageLocation == null) {
                        alert("ホーム");
                    }*/
                    //alert(pageLocation);
                    window.location.assign(path);
                }, 1000);
            }
        }

    }

    return (
        <>
            <div id="menuBar" className="responsiveWidth menuBar">
                <div className="menuButtons" id="accessButton">
                    <input type="image" src={menuIcon} className="menuImages" onClick={() => changeScene(Pages.access.path)} />
                    <p className="menuTexts">アクセス</p>
                </div>
                <div className="menuButtons" id="eventButton">
                    <input type="image" src={menuIcon} className="menuImages" onClick={() => changeScene(Pages.event.path)} />
                    <p className="menuTexts">体育館企画</p>
                </div>
                <div className="menuButtons" id="homeButton">
                    <input type="image" src={menuIcon} className="menuImages" onClick={() => changeScene(Pages.home.path)} />
                    <p className="menuTexts">ホーム</p>
                </div>
                <div className="menuButtons" id="mapButton">
                    <input type="image" src={menuIcon} className="menuImages" onClick={() => changeScene(Pages.map.path)} />
                    <p className="menuTexts">マップ</p>
                </div>
                <div className="menuButtons" id="projectButton">
                    <input type="image" src={menuIcon} className="menuImages" onClick={() => changeScene(Pages.project.path)} />
                    <p className="menuTexts">企画</p>
                </div>
            </div>

            <div id="changeSceneObject" className="" />
            <Bubble />
        </>
    );
}

export default MenuBar;  