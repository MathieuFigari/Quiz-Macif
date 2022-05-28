
import './App.scss';
import { useEffect, useState} from "react";
import { db } from './firebase-config';
import { addDoc, collection, getDocs } from "firebase/firestore";
import Header from './Header';
import Footer from './Footer';
import Supervise from './Supervise';
import { BrowserRouter , Routes, Route  } from "react-router-dom"

import FullSite from './FullSite';


function App() {

  const quiz = collection(db, "quiz");
  const quizUser = collection(db, "userQuiz")

  const [theQuiz, setQuiz] = useState([]);
  const [quizIndex, setIndex ] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [userQuiz, setUserQuiz ] = useState([]);
  const [goodAnswer, setGoodAnswer ] = useState("")
  const [btnDisable, setBtnDisable] = useState(true)
  const [endQuiz, setEnd] = useState(false)
  const[score, setScore] = useState(0)
  const [startQuiz, setStartQuiz] = useState(false)
  const [getQuizUser, setQuizUser] = useState([])

  const thequizIndex = theQuiz[quizIndex];

 const nextQuestion = () => {
     if(quizIndex === theQuiz.length - 1){
         setIndex(0);
         setEnd(true)


     } else {
         setIndex(quizIndex + 1);
     }

     if(userAnswer === goodAnswer) {
       sendQuiz(true)
      setUserQuiz(arr => [...arr, {question_id : theQuiz[quizIndex].id, question : theQuiz[quizIndex].question, answerUser : userAnswer, answerGood : goodAnswer, good: true, explanation: theQuiz[quizIndex].explanation}]);
       setScore(score + 1)
  } else {
    sendQuiz(false)
    setUserQuiz(arr => [...arr, {question_id : theQuiz[quizIndex].id, question : theQuiz[quizIndex].question, answerUser : userAnswer, answerGood : goodAnswer, good: false, explanation: theQuiz[quizIndex].explanation}])
  }

  setBtnDisable(true)

  
}


const quizStart = () => {
  setStartQuiz(true)
} 

const homeReturn = () => {
  setEnd(false)
  setStartQuiz(false)
  setUserQuiz([])
  setScore(0)
}

 const submitAnswer = (selectedAnswer) => {
   setUserAnswer(selectedAnswer);
   setBtnDisable(false);
 }

 const sendQuiz = async (good) => {
   await addDoc(quizUser, {question_id: thequizIndex.id, good: good, userAnswer: userAnswer })
 }



  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(quiz); 
      setQuiz(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    const getUsersQuiz = async () => {
      const dataQuiz = await getDocs(quizUser);
      setQuizUser(dataQuiz.docs.map((document) => ({...document.data(), id: document.id})))
    }
    getUsers();
    getUsersQuiz()
    

  },
  // eslint-disable-next-line 
  []
  );

  
  return (
    <div className="App">

<div id='contain_primair'>

    <Header />
    <BrowserRouter>
      <Routes>
    
      <Route path='/' element={theQuiz.length > 1 &&
      <FullSite  quiz={theQuiz}
      nextQuestion={nextQuestion}
      quizIndex={quizIndex}
      btnDisable={btnDisable}
      submitAnswer={submitAnswer}
      setGoodAnswer={setGoodAnswer}
      startQuiz={startQuiz}
      endQuiz={endQuiz}
      userQuiz={userQuiz}
      score={score}
      quizStart={quizStart}
      homeReturn={homeReturn}
      />} />
    <Route path='/admin' element={theQuiz.length >= 1 && <Supervise quiz={theQuiz} usersQuiz={getQuizUser}/>} />
    </Routes>
    </BrowserRouter> 
</div>


<Footer />

</div>
  );
}

export default App;
