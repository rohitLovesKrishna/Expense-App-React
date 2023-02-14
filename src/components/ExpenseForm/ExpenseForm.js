import React , {useState} from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
     const [me,setMe] = useState(false)

const [enterTitle,setEnterTitle]= useState('');
 const [enterAmount,setEnterAmount]=    useState('');
  const [enterDate,setEnterDate]=   useState('');

    
    const titleHandler = (e)=>{
setEnterTitle(e.target.value)
    }
   const amountHandler = (e) => {
       setEnterAmount(e.target.value)
    }
    const dateHandler = (e) => {
        setEnterDate(e.target.value)
    }
 
const submitMe = (e)=>{
e.preventDefault();
    const expenses = {
        title: enterTitle,
        amount: enterAmount,
        date: new Date(enterDate)
    }
props.onSaveExpenseData(expenses);
setEnterAmount('');
setEnterTitle('')
setEnterDate('')
setTimeout(()=>{
setMe(false)
},2000)
}
 const now = (e)=>{
 setMe(true)
 }


    return (
        <>
            {!me && <div className='new-expense__actions expCen'>
                <button type='submit' onClick={now}>+ Expense</button>
            </div>}
            { me && <form onSubmit={submitMe}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={enterTitle} onChange={titleHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' value={enterAmount} min='0.01' step='0.01' onChange={amountHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' value={enterDate} min='2019-01-01' max='2022-12-31' onChange={dateHandler} />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit' >Add Expense</button>
                </div>
            </form> }
       
        </>
    );
};

export default ExpenseForm;