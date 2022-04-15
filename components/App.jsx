import React from 'react'

const Header = ({course}) => {
  return (
   <h1>Courses</h1>
  );
 }

const Content = ({parts}) => {
  return parts.map((part, i) => <Part key={i} part={part} />);
}


const Part = ({part}) => {
  const { name, exercises } = part;
  return <p> {name} {exercises} </p>;
}

const Total = ({exercises}) => {
  const total = exercises.reduce((a, b) => a + b, 0);
  return (
    <p>Number of exercises {total}</p>
  );
  }
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  const { name, parts } = course;
  const exercises = parts.map(part => part.exercises);
  return (
    <div>
      <Header courseName={name} />
      <Content parts={parts} />
      <Total exercises={exercises} />
    </div>
  )
}



export default App
