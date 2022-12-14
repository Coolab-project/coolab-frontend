import React from 'react'
import "../style/myTeam.css";
import { useNavigate } from "react-router-dom";

const TeamList = ({name}) => {

    let navigate = useNavigate();
    const move_team = () => {
        navigate("/team/chat");
    }

    return (
            <div>
                <button id="teamList" onClick={move_team}><span id="name">{name}</span></button>
            </div>
    )
}

export default TeamList; 