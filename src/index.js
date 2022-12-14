import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Main from './components/main';
import Login from './components/login'
import MyTeam from './components/my-team'
import CreateTeam from './components/create-team'
import reportWebVitals from './reportWebVitals';
import Chat from './components/chat'
import Setting from './components/setting'
import Schedule from './components/schedule'
import Memo from './components/memo'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createTeam" element={<CreateTeam />} />
        <Route path="/myTeam" element={<MyTeam />} />
        <Route path="/team/chat" element={<Chat />} />
        <Route path="/team/setting" element={<Setting />} />
        <Route path="/team/schedule" element={<Schedule />} />
        <Route path="/team/memo" element={<Memo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
