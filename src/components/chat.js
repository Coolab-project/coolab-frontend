import React from 'react'
import "../style/chat.css";
import Header from './header';
import '../style/memo.css'
import { IoMdChatbubbles } from 'react-icons/io'
import { SlCalender } from 'react-icons/sl'
import { TfiNotepad } from 'react-icons/tfi'
import { AiFillSetting } from 'react-icons/ai'

const Chat = () => {

    return (
        <div>
            <Header />
            <div id="board">
                <div id="blue-nemo">
                    <div>
                        <span id="Teamname">Coolab</span>
                        <span id="count">4 인원</span>
                    </div>
                    <a href="/team/chat"><span id='isChat'><IoMdChatbubbles /> 대화장</span></a>
                    <a href="/team/schedule"><span id="shcadule"><SlCalender /> 일정관리</span></a>
                    <a href="/team/memo"><span id="memo"><TfiNotepad /> 아이디어 메모</span></a>
                    <a href="/team/setting"><span id="setting"><AiFillSetting /> 설정</span></a>
                </div>
                <div id="chatBox">
                    <input type="text" id="chat-input" placeholder="대화장에 메세지 보내기"></input>
                </div>
            </div>
        </div>
    )
}

export default Chat; 