import React from "react"
import styled from "styled-components"
import '../style/schedule.css'

const DetailDiv = styled.div`
  div {
    margin-left: 25px;
    margin-top: 60px;
    width: 320px;
  }
`

const Ing = (props) => {

    return (
        <DetailDiv>
            {props.countList && props.countList.map((item, i) => (
                <div key={i}>
                    <div>
                        <input type="text" id="inputStyle" />
                    </div>
                </div>
            ))}
        </DetailDiv>
    )
}

export default Ing