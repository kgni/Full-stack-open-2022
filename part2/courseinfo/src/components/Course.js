import React from 'react';
import Header from './Header';
import Content from './Content';
const Course = (props) => {
	return (
		<div className="course">
			<Header name={props.course.name} />
			<Content parts={props.course.parts} />
		</div>
	);
};

export default Course;
