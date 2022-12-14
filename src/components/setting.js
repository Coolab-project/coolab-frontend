import React from 'react'
import "../style/setting.css";
import Header from './header';
import '../style/memo.css'
import { IoMdChatbubbles } from 'react-icons/io'
import { SlCalender } from 'react-icons/sl'
import { TfiNotepad } from 'react-icons/tfi'
import { AiFillSetting } from 'react-icons/ai'

const Setting = () => {

    return (
        <div>
            <Header />
            <div id="board">
                <div id="blue-nemo">
                    <div>
                        <span id="Teamname">Coolab</span>
                        <span id="count">4 인원</span>
                    </div>
                    <a href="/team/chat"><span id='chat'><IoMdChatbubbles /> 대화장</span></a>
                    <a href="/team/schedule"><span id="shcadule"><SlCalender /> 일정관리</span></a>
                    <a href="/team/memo"><span id="memo"><TfiNotepad /> 아이디어 메모</span></a>
                    <a href="/team/setting"><span id="isSetting"><AiFillSetting /> 설정</span></a>
                </div>
                <div id="setBox">
                    <span id="set-text">설정<AiFillSetting /></span>
                    <input type="text" id="name-change" placeholder="팀 이름 변경"/>
                    <button id="btn1"><span id="change1">변경</span></button>
                    <select id="count-change">
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button id="btn2"><span id="change2">변경</span></button>
                </div>
            </div>
        </div>
    )
}

export default Setting 