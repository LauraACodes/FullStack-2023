const Course = ({ course }) => {
    console.log(course)
    return (
      <>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total sum={course.parts.reduce( (summa, part) => {
          return summa + part.exercises}, 0)
        } />
      </>
    )
  }
  
  const Header = ({ name }) => <h1>{name}</h1>
  
  const Content = ({ parts }) => parts.map(part => <Part key={part.id} part={part} /> )
  
  const Part = ({ part }) => 
    <p>
      {part.name} {part.exercises}
    </p>
  
  const Total = ({ sum }) => <h4>total of exercises {sum}</h4>

  export default Course