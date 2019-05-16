import React from 'react';
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import CourseList from './components/CourseList';

function App() {
  return (
    <div>
      <NavBar />
      <CourseList />
    </div>
  );
}

export default App;
