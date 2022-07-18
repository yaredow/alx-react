import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';

export default function CourseList(props) {
  return(
  <table id="CourseList">
    <thead>
      <CourseListRow textFirstCell="Available courses" isHeader={true}/>
      <CourseListRow textFirstCell="Course name" textSecondCell="Credit" and isHeader={true}/>
    </thead>
    <tbody>
      <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false}/>
      <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false}/>
      <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false}/>
    </tbody>
  </table>
  )
}