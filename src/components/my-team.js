import React from 'react'
import "../style/myTeam.css";
import TeamList from './teamList'
import Header from './header';

const MyTeam = () => {

    const names = ["갓대희", "김대희", "한대희"]
    const teamList = names.map((name) => (<TeamList key={name} name={name} />))

    return (
        <div>
            <Header />
            <div className="myTeam">
                <span id="title">팀 목록</span>
                {teamList}
            </div>
        </div>
    )
}

export default MyTeam; 