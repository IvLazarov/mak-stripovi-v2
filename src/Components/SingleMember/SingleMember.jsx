import { useParams, Link } from "react-router";
import MembersInfo from "../Members/MembersInfo.js";
import '../BackToHome/BackToHome.jsx';
import './SingleMember.css';
import BackToHome from "../BackToHome/BackToHome.jsx";

const SingleMember = () => {
    const {id} = useParams()
    console.log(id)
    return <div className="member-container">
            <h1>{MembersInfo[id].name}</h1>
            <div className="member-description">
                <img src={MembersInfo[id].realProfilePicture} alt="member-profile-picture" />
                <div>
                    Нешто накратко за членот, линкови до социјални мрежи
                </div>
            </div>
            <div className="works">
                <h1>Дела</h1>
                <div>
                {MembersInfo[id].works.map((memberWork) => {
                    return <Link key={memberWork.id} to={memberWork.read} target="blank">
                        {memberWork.img ? <img src={memberWork.img} alt="member-work" /> :
                            <img src='../profile-pictures/member-placeholder-img.jpg' alt="member-work" />
                        }
                        
                        <h3>{memberWork.name}</h3>
                        <h3>{memberWork.year}</h3>
                    </Link>
                })}
                </div>
            </div>
            <div className="member-links">
            <Link to='/членови'>Ѕирни друг член</Link>
            < BackToHome />
            </div>
    </div>
}

export default SingleMember;