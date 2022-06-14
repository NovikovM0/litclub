import React, {useState} from 'react';
import {Routes ,Route } from "react-router-dom";
import {LoginPage} from "./components/Auth/LoginPage";
import {SignUpPage} from "./components/Auth/SignUpPage";
import { Header } from "./components/Pages/Header";
import { Readlist } from "./components/Pages/Readlist";
import { Readed } from "./components/Pages/Readed";
import { Main } from "./components/Pages/Main";
import { AddPage } from "./components/Pages/AddPage";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./lib/font-awesome/css/all.min.css";
import { ChatPage } from 'components/ChatMenu/ChatPage';
import ProtectedRoute from 'components/ProtectedRoute';


function App() {
  return (
    <>
    <Header/>
      <Routes>
          <Route path="/Login" element={<LoginPage/>}/>
          <Route path="/SignUp" element={<SignUpPage/>}/>
          <Route path="/" element={<ProtectedRoute><AddPage/></ProtectedRoute>}/>
          <Route path="/main" element={<ProtectedRoute><Main/></ProtectedRoute>}/>
          <Route path="/readed" element={<ProtectedRoute><Readed/></ProtectedRoute>}/>
          <Route path="/readlist" element={<ProtectedRoute><Readlist/></ProtectedRoute>}/>
          <Route path="/chat" element={<ProtectedRoute><ChatPage/></ProtectedRoute>}/>
      </Routes>
    </>
  );
}
export default App;
