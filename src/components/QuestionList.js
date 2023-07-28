import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";



function QuestionList() {
  const[questions,setQuestions]=useState([])
   
useEffect(()=>{
  fetch("http://localhost:4000/questions")
  .then(response=>response.json())
  .then(data=>setQuestions(data))
},[])
// helper function 


function Delete(id){
  console.log("working")
  const deleted=questions.filter(element=>{ 
     return element.id !==id
  })
  
setQuestions(deleted)

}

const displayQuestions = questions.map(question => <QuestionItem Delete={Delete}   key={question.id} question={question}/>)
  return (
    <section>
      <h1>Quiz Questions</h1>
      

     <ul> 
       {/* <QuestionItem questions={questions} /> */}
       {displayQuestions}
      </ul>
    </section>
  );
}

export default QuestionList;
