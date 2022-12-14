import React from 'react'
import "../style/schedule.css";
import Header from './header';
import '../style/memo.css'
import { IoMdChatbubbles } from 'react-icons/io'
import { SlCalender } from 'react-icons/sl'
import { TfiNotepad } from 'react-icons/tfi'
import { AiFillSetting } from 'react-icons/ai'
import Success from "./success"
import Ing from "./ing"
import Do from "./do"

const Schedule = () => {
    const [countList1, setCountList1] = React.useState([0])

    const onAddDetailDiv1 = () => {
        let countArr1 = [...countList1]
        let counter1 = countArr1.slice(-1)[0]
        counter1 += 1
        countArr1.push(counter1)	// index 사용 X
        // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용	
        setCountList1(countArr1)
    }

    const [countList2, setCountList2] = React.useState([0])

    const onAddDetailDiv2 = () => {
        let countArr2 = [...countList2]
        let counter2 = countArr2.slice(-1)[0]
        counter2 += 1
        countArr2.push(counter2)	// index 사용 X
        // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용	
        setCountList2(countArr2)
    }

    const [countList3, setCountList3] = React.useState([0])

    const onAddDetailDiv3 = () => {
        let countArr3 = [...countList3]
        let counter3 = countArr3.slice(-1)[0]
        counter3 += 1
        countArr3.push(counter3)	// index 사용 X
        // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용	
        setCountList3(countArr3)
    }

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
                    <a href="/team/schedule"><span id="isShcadule"><SlCalender /> 일정관리</span></a>
                    <a href="/team/memo"><span id="memo"><TfiNotepad /> 아이디어 메모</span></a>
                    <a href="/team/setting"><span id="setting"><AiFillSetting /> 설정</span></a>
                </div>
                <div id="scheduleBox">
                    <div id = "success">
                        <span id="text1">완료</span>
                        <button id="btn" onClick={onAddDetailDiv1}>+</button>
                        <Success countList={countList1} />
                    </div>
                    <div id="ing">
                        <span id="text2">진행 중</span>
                        <button id="btn3" onClick={onAddDetailDiv2}>+</button>
                        <Ing countList={countList2} />
                    </div>
                    <div id="do">
                        <span id="text3">할 일</span>
                        <button id="btn4" onClick={onAddDetailDiv3}>+</button>
                        <Do countList={countList3} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule