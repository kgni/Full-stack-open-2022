const Header = (props) => {
	console.log(props);
	return <h1>{props.name}</h1>;
};

const Part = (props) => {
	console.log(props);
	return (
		<p>
			{props.part.name} {props.part.exercises}
		</p>
	);
};

const Content = (props) => {
	const partList = props.parts.map((part) => {
		return <Part part={part} />;
	});
	return <div>{partList}</div>;
};

const Total = (props) => {
	return <p>Number of exercises {props.total}</p>;
};

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
			},
			{
				name: 'State of a component',
				exercises: 14,
			},
		],
	};

	const total = course.parts.reduce((acc, c) => acc + c.exercises, 0);

	return (
		<div>
			<Header name={course.name} />
			<Content parts={course.parts} />
			<Total total={total} />
		</div>
	);
};

export default App;
