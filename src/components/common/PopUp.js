import { Pages } from "../Pages";
import './commonStyle.css';
import closeIcon from "../../img/close.png";

function PopUp({ children }) {
    function closePopUp() {
        const target = document.getElementById("popUp");
        //target.style.display="none";
        if (!target.classList.contains("invisible")) {
            target.classList.add("invisible");
        }
    }

    return (
        <div id="popUp" className="popUP responsiveWidth invisible">
            <input type="image" src={closeIcon} id="closeIcon" className="closeIcon" onClick={()=>closePopUp()} />
            {children}
        </div>
    )
}

export default PopUp;