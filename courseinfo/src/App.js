import logo from './logo.svg';


const Header = (props) => {
  const {course} =  props

  return (
    
      <h1>{course}</h1>
     
   
  )
}
const Part  = (props) => {
 
  const {name, quantity} = props

  return (
    
     
      <p>
        {name} {quantity}
      </p>
     
     
  )
}
const Content  = (props) => {
 
  const {parts} = props


  const componentList = parts.map((part) => {
    let {name, exercises} = part
    return (
    <Part name = {name} quantity= {exercises} key = {name} />
    )
  })

  return (
    
    <div>
     {componentList}
    </div>
     
     
     
     
     
  )
}

const Total  = (props) => {
  
  let {parts} = props

  let total = parts[0].exercises + parts[1].exercises + parts[2].exercises

  return (
    
      <p>Total of {total} exercises </p>
    
  )
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
  }


  return (
    <div>
      <Header course={course.name} />

      <Content parts = {course.parts}
      />
      
      
      <Total parts =  {course.parts} />
     
    </div>
  )
}



export default App;
