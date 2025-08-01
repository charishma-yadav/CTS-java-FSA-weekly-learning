
import logo from './logo.svg';
import './App.css';
import { BookDetails, BlogDetails, CourseDetails } from './DetailsComponents';
import React, { useState } from 'react';


function App() {
  const [selected, setSelected] = useState('book');
  const showBlog = false;
  const showCourse = true;

  // 1. Using if-else
  let detailsComponent;
  if (selected === 'book') {
    detailsComponent = <BookDetails />;
  } else if (selected === 'blog') {
    detailsComponent = <BlogDetails />;
  } else {
    detailsComponent = <CourseDetails />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Blogger App - Conditional Rendering Demo</h1>
        <div style={{marginBottom: 20}}>
          <button onClick={() => setSelected('book')}>Book Details</button>
          <button onClick={() => setSelected('blog')}>Blog Details</button>
          <button onClick={() => setSelected('course')}>Course Details</button>
        </div>

        {/* 1. If-Else Variable */}
        <h3>1. If-Else Variable</h3>
        {detailsComponent}

        {/* 2. Ternary Operator */}
        <h3>2. Ternary Operator</h3>
        {selected === 'book' ? <BookDetails /> : selected === 'blog' ? <BlogDetails /> : <CourseDetails />}

        {/* 3. Logical && Operator */}
        <h3>3. Logical && Operator</h3>
        {showBlog && <BlogDetails />}
        {showCourse && <CourseDetails />}

        {/* 4. Switch Statement */}
        <h3>4. Switch Statement</h3>
        {(() => {
          switch(selected) {
            case 'book':
              return <BookDetails />;
            case 'blog':
              return <BlogDetails />;
            case 'course':
              return <CourseDetails />;
            default:
              return null;
          }
        })()}
      </header>
    </div>
  );
}

export default App;
