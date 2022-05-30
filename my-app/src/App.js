
import './App.scss';
import { useEffect, useState} from "react";
import { db, auth } from './firebase-config';
import { addDoc, collection, getDocs } from "firebase/firestore";
import Header from './Header';
import Footer from './Footer';
import Supervise from './Supervise';
import { Routes, Route, useNavigate } from "react-router-dom"

import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

import FullSite from './FullSite';
import Login from './Login';


function App() {

  let navigate = useNavigate()

  const[user, setUser] = useState( JSON.parse(localStorage.getItem('user')) || {} )
  
  
  const [logEmail, setLogEmail] = useState("");
  const [logPassWord, setLogPW] = useState("");
  const [logged, setLoggin] = useState(false)
  const [admin, setAdmin] = useState(false)

 


  console.log(logged, admin)



  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        logEmail,
        logPassWord
      );
      setUser(user)
      localStorage.setItem('user', JSON.stringify(user, admin));
      setLoggin(true);
      setLogPW("")
    } catch (error) {
      console.log(error.message);
      localStorage.setItem('user', null);
      JSON.parse(localStorage.getItem('user'));
      alert("veuillez reessayer")
    }
  }

  const logout = async () => {
    try { 
    await signOut(auth)
    localStorage.removeItem('user');
    setLoggin(false)
    setAdmin(false)
    setLogEmail("")
    navigate("/")
    } catch  (error){
      console.log(error.message)
    }

  }

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
    getUsersQuiz();

    if ( user.user !== undefined ) {
      console.log(user)
      setLoggin(true)
    }

  
    

  },
  // eslint-disable-next-line 
  []
  );


  
  

  
  return (
    <div className="App">

<div id='contain_primair'>

    <Header logout={logout} />
    <div style={{display: "flex", alignItems: "center"}} className='second_contain'>
    

 

      <Routes>
     

    

    
      <Route path='/' element={
       logged===true ? theQuiz.length > 1 &&
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
      logEmail={logEmail}
      setAdmin={setAdmin}
      admin={admin}
      />
        :
        <Login  login={login} setLogEmail={setLogEmail} setLogPW={setLogPW}/>
        
    } 
    
      />


      
        


    <Route
    
    path='/admin' element={
      theQuiz.length >= 1 && admin && <Supervise logged={logged} admin={admin} quiz={theQuiz} usersQuiz={getQuizUser}/>
      } />


    </Routes>




    
</div>
</div>

<Footer />

</div>
  );
}

export default App;
