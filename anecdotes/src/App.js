import logo from './logo.svg';
import { useState } from 'react';

function App() {

 
  const basicAnecdoteList = [

    {title:"hello1", content:"nothing new, zzz" , votes:0},
    
    {title:"Top rated ", content:"The ones I like most" , votes:0},
    {title:"some law", content:"'Adding manpower to a late software project makes it later!'" , votes:0},
    {title:"Uncle bob", content:"'Premature optimization is the root of all evil.'" , votes:0},
    {title:"hello5", content:"turn on yoour pc new, zzz" , votes:0}


  ]
  let [anecdoteList , setAnecdoteList] = useState(basicAnecdoteList)
  let [id , setId] = useState(getRandomNumber(anecdoteList.length))

  let [currentAnecdote , setCurrentAnecdote] = useState(anecdoteList[id])
  let [currentMostVotedAnecdote , setCurrentMostVotedAnecdote] = useState(anecdoteList[id])
 
 
  

  let changeQuote = () => {
    let idChange = getRandomNumber(anecdoteList.length)
    setCurrentAnecdote(  anecdoteList[idChange])
    setId(idChange)
  }

  let vote = () => {
    
    let anecdoteListCopy = structuredClone(anecdoteList)
    anecdoteListCopy [id].votes = anecdoteListCopy [id].votes +1
    setAnecdoteList(anecdoteListCopy)
    setCurrentAnecdote(  anecdoteListCopy[id])

    updateMostVotedAnecdote(anecdoteListCopy)

  }


  let updateMostVotedAnecdote = (anecdoteList) => {

    let voteList = anecdoteList.map((element) => {
      return element.votes
    })
    let max= Math.max(...voteList)

    let mostVotedAnecdote = anecdoteList.find((element) => {
      return element.votes == max
    })
    

    setCurrentMostVotedAnecdote(mostVotedAnecdote)



  }
  


  return (
    <div className="App">
      <h1> Anecdote of the day </h1>
       <Anecdote title ={currentAnecdote.title} 
       content = {currentAnecdote.content }
       votes= {currentAnecdote.votes} >
    </Anecdote>

    <button onClick={vote}>vote</button>
    <button onClick={changeQuote}>next anecdote</button> 

    <h1> Anecdote with most votes </h1>
    <Anecdote title ={currentMostVotedAnecdote.title} 
       content = {currentMostVotedAnecdote.content }
       votes= {currentMostVotedAnecdote.votes} >
    </Anecdote>
    


     


    </div>
  );
}

function Anecdote(props) {

  const {title , content, votes} = props

  return (
    <div >
       <h1 > {title}</h1>
       <p > {content}</p>
       <p > have {votes} votes</p>


     
    </div>
  );
}

function getRandomNumber(maxValue) {
  let n = Math.random()
  let rounded=  Math.floor( n* maxValue)
  return rounded;

}

export default App;
