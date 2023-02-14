import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import ChartBar from './ChartBar.js'
import Card from '../UI/Card.js'
import Months from './Months.js'

export default function Expenses(props) {

              const [filteredYear, setFilteredYear] = useState('2022');

              const filterChangeHandler = selectedYear => {
                     setFilteredYear(selectedYear);
              };
       const filteredExpenses = props.data.filter(expense => {
              return expense.date.getFullYear().toString() === filteredYear;
       });
       return (
        <>
           
               <Card className='expenses'>
                            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                            <ChartBar monthExpenses = {filteredExpenses} selectedYear={filteredYear}/>
                            <hr />
                            <Months /> 
                            <hr />
                            {filteredExpenses.length === 0 && <p className='emptyExpenseMessage'>No expenses for this year</p>}
                            {filteredExpenses.length > 0 && filteredExpenses.map((item) => (
                                   <ExpenseItem key={item.id} title={item.title} price={item.amount} date={item.date} />
                                   ))}
               </Card>
        </>
    );
}
