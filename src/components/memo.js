import React from 'react'
import "../style/idea.css";
import Header from './header';
import '../style/memo.css'
import { IoMdChatbubbles } from 'react-icons/io'
import { SlCalender } from 'react-icons/sl'
import { TfiNotepad } from 'react-icons/tfi'
import { AiFillSetting } from 'react-icons/ai'

const Memo = () => {

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
                    <a href="/team/memo"><span id="isMemo"><TfiNotepad /> 아이디어 메모</span></a>
                    <a href="/team/setting"><span id="setting"><AiFillSetting /> 설정</span></a>
                </div>
                <div id="ideaMemo">
                    <div id="nameDiv">
                        <span id="ideaName">아이디어 명</span>
                        <textarea id="ideaArea" placeholder="여기다가 입력 해보세요" />
                    </div>
                    <div id="summary">
                        <span id="summary-text">개요</span>
                        <textarea id="sumArea" placeholder="여기다가 입력 해보세요" />
                    </div>
                    <div id="creative">
                        <span id="creative-text">차별성/독창성</span>
                        <textarea id="creArea" placeholder="여기다가 입력 해보세요" />
                    </div>
                    <div id="Similar">
                        <span id="similar-text">유사 제품</span>
                        <textarea id="simArea" placeholder="여기다가 입력 해보세요" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Memo