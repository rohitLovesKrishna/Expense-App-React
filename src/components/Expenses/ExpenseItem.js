import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css'
import Card from '../UI/Card.js'

function ExpenseItem(props) {


    return (
        <>
            <Card className='expense-item' key={props.id}>
            <ExpenseDate date = {props.date}/>
                <div className='expense-item__description'>
                    <h2 className='expense-head' >{props.title}</h2>
                    <div className='expense-item__price'>₹ {props.price}</div>
                </div>
            </Card>
      
        </>
        );
}
export default ExpenseItem 