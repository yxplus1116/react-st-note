import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import HooksComponents from './pages/hooks'
import RouterTest from './pages/routerTest';
import NotFind from './pages/notFind';
import TodoList from './pages/todoList'
import './App.css';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hooks/*" element={<HooksComponents />} />
        <Route path="/todoList" element={<TodoList />} />
        <Route path="routerTest/:id?" element={<RouterTest />} />
        <Route path="404" element={<NotFind />} />
        <Route path="*" element={<Navigate to={"/404"} />} />
      </Routes>
    </>
  )
}

export default App;
