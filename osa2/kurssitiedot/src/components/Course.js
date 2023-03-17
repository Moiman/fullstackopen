const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div >
  )
}

const Header = (props) => {
  return (
    <h2>{props.course}</h2>
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

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0)
  return (
    <p><b>total of {total} exercises</b></p>
  )
}

export default Course