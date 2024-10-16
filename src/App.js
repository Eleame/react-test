import './App.css';

import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import TodoList from "./TodoList";
import JokePage from "./JokePage";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Todo List</Link>
          </li>
          <li>
            <Link to="/jokes">Jokes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/jokes" element={<JokePage />} />
      </Routes>
    </Router>
  );
}

export default App;
