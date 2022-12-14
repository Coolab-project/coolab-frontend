import React, { useEffect } from 'react'
import "../style/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const move_home = () => {
    navigate("/");
  }
  
  const initKakao = () => {
    const jskey = 'b662c2b3acf434b49fde8ca475509b88'
    const Kakao = window.Kakao;
    if (Kakao && !Kakao.isInitialized()) {
      Kakao.init(jskey)
    }
  }

  const kakaoLogin = async() => {
    const Kakao = window.Kakao;
    await Kakao.Auth.login({
      success() {
        Kakao.API.request({
          url: '/v2/user/me',
          success(res) {
            const kakaoAccount = res.kakao_account
            console.log(kakaoAccount.profile.profile_image_url)
            sessionStorage.setItem('nickName', kakaoAccount.profile.nickname)
            sessionStorage.setItem('email', kakaoAccount.email)
            sessionStorage.setItem('profile', kakaoAccount.profile.profile_image_url)
            move_home()
          },
          fail(error) {
            console.log(error)
          },
        });
      }, 
      fail(error) {
        console.log(error)
      },
    });
  };

  useEffect(() => {
    initKakao()
  })

  return (
    <React.Fragment>
      <div className="App">
        <div className="white-container">
          <span id="login-title">Login</span>
          <button id="kakao-button" onClick={kakaoLogin}></button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login 