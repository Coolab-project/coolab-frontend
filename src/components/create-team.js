import React, { useState } from 'react'
import "../style/create-team.css";
import Header from './header';
import axios from 'axios';

const CreateTeam = () => {
    const [values, setValues] = useState({
        name: "",
        count: "",
        purpose: "",
        isWorkspace: "true"
    })

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        alert('팀 생성 완료!')
        console.log(values.name)
        console.log(values.count)
        console.log(values.purpose)
        console.log(values.isWorkspace)
        axios.post("url", {
            username: "",
            password: ""
        })
            .then(function (response) {
                console.log(response)
            }).catch(function (error) {
                console.log(error)
            })
        window.location.href = '/'
    }

    return (
        <div>
            <Header />
            <div className="createTeam">
                <form name="teamForm" onSubmit={handleSubmit}>
                    <input type="text" id="teamName" name="name" placeholder="팀 이름(20자)" onChange={handleChange}/>
                    <select id="teamCount" name="count" onChange={handleChange}>
                        <option value="">최대 인원</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input type="text" id="teamPurpose" placeholder="목적" name="purpose" onChange={handleChange} />
                    <div id="box">
                        <span id="text">워크스페이스 생성</span>
                        <label><input type="radio" name="isWorkspace" value="true" id="check1" onChange={handleChange} defaultChecked /><span id="check1-text">예(기본)</span></label>
                        <label><input type="radio" name="isWorkspace" value="false" id="check2" onChange={handleChange} /><span id="check2-text">아니요</span></label>
                    </div>
                    <button type="submit" id="submit"><span id="submit-text">생성</span></button>
                </form>
            </div>
        </div>
    )
}

export default CreateTeam; 