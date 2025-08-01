import React, { useState } from "react";

function BookDetails() {
  return <div style={{border: '1px solid #ccc', padding: 10, margin: 10}}><h2>Book Details</h2><p>Title: React in Action<br/>Author: Mark Tielens Thomas</p></div>;
}

function BlogDetails() {
  return <div style={{border: '1px solid #ccc', padding: 10, margin: 10}}><h2>Blog Details</h2><p>Title: Learning React<br/>Author: Jane Doe</p></div>;
}

function CourseDetails() {
  return <div style={{border: '1px solid #ccc', padding: 10, margin: 10}}><h2>Course Details</h2><p>Title: React for Beginners<br/>Instructor: John Smith</p></div>;
}

export { BookDetails, BlogDetails, CourseDetails };
