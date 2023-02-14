import React from 'react';
import ExpenseForm from './ExpenseForm';
import './AddExpense.css';

function AddExpense(props) {
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.myData(expenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
        </div>
    );
};

export default AddExpense;