import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const [name, setName] = React.useState({});  
  const [data, setData] = React.useState({});

  const dataObj = {};

  const emailChange = (event) => {
    dataObj.email = event.target.value; 
  }
  const nameChange = (event) => {
    dataObj.name = event.target.value; 
  }

  const handleSubmission = () => {
    setData(dataObj)
  }

  React.useEffect(()=>{
    console.log(data)
  }, [data])

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
