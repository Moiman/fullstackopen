const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div >
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  const { parts } = props
  return (
    parts.map((part) =>
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    )
  )
}

const Total = (props) => {
  const { parts } = props
  return (
    <p>Number of exercises {parts.reduce((a, b) => a + b.exercises, 0)}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }
  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App