import { useState } from 'react'
import './App.css'

const App = () => {
  const [inputOne,setInputOne] =useState('')
  const [inputTwo,setInputTwo] =useState('');
  const [inputThree,setInputThree] =useState('');
  const [operatorOne,setOperatorOne] =useState('');
  const [operatorTwo,setOperatorTwo] =useState('');
  const [result,setResult] =useState('');

  const operator =(num1,num2,operatorOne) =>{
    switch(operatorOne){
      case '+':
      return num1 + num2;
      case '-':
      return num1 - num2;
      case '*':
      return num1 * num2;
      case '/':
      return num1 / num2;

      default :
      return 'Please select Operator';
    }
  }

  const calculateResult =()=>{
    const num1 = parseInt(inputOne);
    const num2 = parseInt(inputTwo);
    const num3 = parseInt(inputThree);
  
      const firstResult =operator(num1,num2,operatorOne);
      const secondResult =operator(firstResult,num3,operatorTwo);
      setResult(secondResult);
     };

     const clearInputs = () => {
      setInputOne('');
      setInputTwo('');
      setInputThree('');
      setOperatorOne('');
      setOperatorTwo('');
      setResult('');
    };
return (
  <div>
    <h1>電卓</h1>
    <div style={{display:'inline-block',border: '1px solid rgba(0, 0, 0, 0.05)',height:"100px",padding:"10px",alignContent:'center'}} >
      <input value={inputOne} onChange={(e)=>setInputOne(e.target.value)} type="number" 
      style={{height: "30px",width:"150px",margin:"10px"}} />
      <select value={operatorOne} onChange={(e)=>setOperatorOne(e.target.value)}
        style={{height: "40px",width:"50px",margin:"10px"}}>
      <option value=""></option>
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
      </select>
      <input value={inputTwo} onChange={(e)=>setInputTwo(e.target.value)} type="number"
      style={{height: "30px",width:"150px",margin:"10px"}} />
      <select value={operatorTwo} onChange={(e)=>setOperatorTwo(e.target.value)}
        style={{height: "40px",width:"50px",margin:"10px"}}>
      <option value=""></option>
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
      </select>
      <input value={inputThree} onChange={(e)=>setInputThree(e.target.value)}  type="number"
      style={{height: "30px",width:"150px",margin:"10px"}} />
      <button type="button" onClick={calculateResult} style={{background :"green",width:"150px"}}>=</button>

      <div style={{display:'inline-block'}}>
      <input value={result} style={{height: "30px",width:"150px",margin:"10px"}} />
      <button type="button" style={{background: "red",width:"150px"}} onClick={clearInputs}>りセット</button>
      </div>
      
    </div>
  </div>
);
}

export default App
