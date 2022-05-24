
import './App.scss';
import { useEffect, useState} from "react";
import { db } from './firebase-config';
import { collection, getDocs } from "firebase/firestore";

import Quiz from './Quiz';

function App() {

  const quiz = collection(db, "quiz");

  const [theQuiz, setQuiz] = useState([]);
  const [quizIndex, setIndex ] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [userQuiz, setUserQuiz ] = useState([]);
  const [goodAnswer, setGoodAnswer ] = useState("")
  const [btnDisable, setBtnDisable] = useState(true)
  const [endQuiz, setEnd] = useState(false)

 const nextQuestion = () => {
     if(quizIndex === theQuiz.length - 1){
         setIndex(0);
         setEnd(true)


     } else {
         setIndex(quizIndex + 1);
     }
     if(userAnswer === goodAnswer) {
       setUserQuiz(arr => [...arr, {id : theQuiz[quizIndex].id, question : theQuiz[quizIndex].question, answer : userAnswer}])
     } else {
       setUserQuiz(arr => [...arr, {id : theQuiz[quizIndex].id, question : theQuiz[quizIndex].question, answerUser : userAnswer, answerGood : goodAnswer}])
     }


 }


 
   console.log(userQuiz)
 

 

 const submitAnswer = (selectedAnswer) => {
   setUserAnswer(selectedAnswer);
   setBtnDisable(false);
 }



  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(quiz); 
      setQuiz(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getUsers();
    

  },
  // eslint-disable-next-line 
  []
  );


  return (
    <div className="App">
      { 
      theQuiz.length > 1 &&
      <Quiz quiz={theQuiz}
      nextQuestion={nextQuestion}
      quizIndex={quizIndex}
      userAnswer={userAnswer}
      btnDisable={btnDisable}
      submitAnswer={submitAnswer}
      setGoodAnswer={setGoodAnswer}
      />
}
    </div>
  );
}

export default App;
