import { Link } from "react-router";
import NavBar from "../NavBar/NavBar";
import './MembersInfo.js';
import './Members.css';
import MembersInfo from "./MembersInfo.js";

const Members = () => {
    return <div className="members-container">
        <NavBar />
        <h1>Членови на Мак Стрипови</h1>
        <div className="members">
        {MembersInfo.map((memberInfo) => {
            return <Link key={memberInfo.id} to={`/членови/${memberInfo.id}`} >
                <img src={memberInfo.drawnProfilePicture} alt="member-image" />
                <h3>{memberInfo.name}</h3>
            </Link>
        })}

        </div>
    </div>
}

export default Members;

//davor-dramikjanin-profile-pic-2.jpg