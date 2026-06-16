import logo from './logo.svg';

import { useState } from 'react'



function App() {

   // guarda los clics de cada botón en su propio estado
   const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)

   const handleGood = () => {setGood(good +1)}
   const handleNeutral= () => {setNeutral(neutral +1)}
   const handleBad = () => {setBad(bad +1)}

  
 
   return (
     <div>

        <h1> give feedback</h1>
      <Button handler={handleGood} name = "good" >  </Button>
      <Button handler={handleNeutral} name = "neutral">  </Button>
      <Button handler={handleBad} name = "bad">   </Button>

      
      

       <Statistics good = { good} neutral = {neutral} bad = {bad}></Statistics> 
       

     </div>
   )
 }

 const Statistics = (props) => {
  const  {good, neutral, bad} = props

  let total = good + neutral + bad
  let avgQualification = good + (bad *-1)
  let positivePorcentage = good / total *100

  if (total == 0) {
    return (
      <div>
      <h1> Stadistics</h1>
     <p> No Feedback given  </p>
    
     </div>
    )
  }

  return ( 
   
       <div>
        <h1> Stadistics</h1>

        <table>
        <tbody>
       

          

       
        <StatisticLine name ="Good" value= {good}></StatisticLine>
        <StatisticLine name ="Neutral" value= {neutral}></StatisticLine> 
        <StatisticLine name ="Bad" value= {bad}></StatisticLine>
      
        
        <StatisticLine name ="Total" value= {total}></StatisticLine>
        <StatisticLine name ="avgQualification" value= {avgQualification}></StatisticLine> 
        <StatisticLine name ="positivePorcentage" value= {positivePorcentage}></StatisticLine>
        </tbody>
       </table>
       </div>
  )


}

const StatisticLine  = (props) => {
  const  {name , value} = props
  return ( 
   

    <tr>
       <td> {name} </td>
       <td>  {value}   </td>
    </tr>
      
       
  )


}



const Button =(props) => {
  const  { name , handler} = props

  

  return ( 
   
      
       <button onClick={handler}> {name} </button>
     
  )


}



export default App;
