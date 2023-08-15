import { Pages } from "../../Pages";
import bubbleImage from "../../../img/bubble.jpg";

function Bubble() {

    return (
        <div id="bubbleFrame" className="responsiveWidth invisible">
            <img id="bubbleMotion_0" className="bubbleImage bubbleMotionOut" src={bubbleImage} />
            <img id="bubbleMotion_1" className="bubbleImage bubbleMotionOut" src={bubbleImage} />
            <img id="bubbleMotion_2" className="bubbleImage bubbleMotionOut" src={bubbleImage} />
            <img id="bubbleMotion_3" className="bubbleImage bubbleMotionOut" src={bubbleImage} />
            <img id="bubbleMotion_4" className="bubbleImage bubbleMotionOut" src={bubbleImage} />
        </div>
    )
}

export default Bubble;