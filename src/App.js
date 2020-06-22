import React from 'react';
import logo from './logo.svg';
import './App.css';

import { auth } from 'firebase';


function App() {
  // const [data, setData] = React.useState({});

  const dataObj = {};

  const emailChange = (event) => {
    dataObj.email = event.target.value; 
  }
  const nameChange = (event) => {
    dataObj.name = event.target.value; 
  }

  const handleSubmission = () => {
    // setData(dataObj)
    auth().signInWithEmailAndPassword(dataObj.email, dataObj.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("you have not logged in successfully")
      console.log(errorCode, errorMessage);
    });
  }

  // React.useEffect(()=>{
  //   console.log(data)
  // }, [data])

  return (
    <form>
      <label>Name:
        <input type="text" onChange={nameChange}></input>
      </label>
      <label>Email:
        <input type="email" onChange={emailChange}></input>
      </label>
      <input type="submit" onClick={handleSubmission}></input>
    </form>
  );
}

export default App;
