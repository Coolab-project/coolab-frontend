import React from 'react'
import { useNavigate } from "react-router-dom";
import "../style/header.css";

const Header = () => {
    let navigate = useNavigate();
    const move_login = () => {
        navigate("/login");
    }
    const nickName = sessionStorage.getItem('nickName')
    return (
        <div>
            <header>
                <a id="main-text" href="/">coolab</a>
                <a id="menu1" href="/createTeam">팀 생성</a>
                <a id="menu2" href="/myTeam">내 팀</a>
                <button id="login-button" onClick={move_login}><span id="login-text">{nickName ? nickName : '로그인'}</span></button>
            </header>
        </div>
    )
}

export default Header; 