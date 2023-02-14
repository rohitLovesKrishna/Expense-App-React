import './App.css';
import React,{useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import AddExpense from './components/ExpenseForm/AddExpense';


function App() {
const [details,setDetails] = useState([
  { id: 'e1', title: "New Tv", amount: 1200, date: new Date(2022, 0, 21) },
  { id: 'e2', title: "Vrindavan", amount: 1000, date: new Date(2020, 1, 21) },
  { id: 'e3', title: "Car Insurance", amount: 1500, date: new Date(2020, 0, 21) }
])

  const mynewData = (expensesData)=>{
setDetails((previous)=>(
  [expensesData,...previous]
))
  }


  return (
  <>
      <AddExpense  myData= {mynewData} />
      <Expenses data = {details}/>
  </>
  );
}
export default App;
