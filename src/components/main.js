import React from 'react'
import { useNavigate } from "react-router-dom";
import "../style/main.css";
import Header from './header';

const Main = () => {
    let navigate = useNavigate();
    const move_login = () => {
        navigate("/login");
    }
    const move_createTeam = () => {
        navigate("/createTeam")
    }
    return (
        <div className="background">
            <Header />
            <div className = "mainPage1">
                <hr id="line"></hr>
                <span id="subtitle">Cooperate<br />with your<br />team</span>
                <button id="register-button" onClick={move_login}><span id="resigter-text">회원가입</span></button>
                <img id="image" src='../unsplash_hZPYwYR02Yo.png' alt="로딩"></img>
            </div>
            <div className="mainPage2">
                <hr id="line"></hr>
                <span id="subtitle2">팀 생성으로<br />자신만의 팀을<br />만들어보세요</span>
                <button id="register-button2" onClick={move_createTeam}><span id="resigter-text2">생성</span></button>
                <img id="image2" src='../unsplash_4CaVbHUXf5o.png' alt="로딩"></img>
            </div>
        </div>
    )
}

export default Main; 