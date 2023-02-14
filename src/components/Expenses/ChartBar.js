import React from 'react'
import './ChartBar.css'

export default function ChartBar(props) {
  const monthExpenses = props.monthExpenses
  let months = {
    jan:0,feb:0,mar:0,apr:0,may:0,jun:0,jul:0,aug:0,sep:0,oct:0,nov:0,dec:0
  }
  const listOfMonths = monthExpenses.map((item)=>{
    if(item.date.getMonth() == 0){
      months.jan += 1;
    } if (item.date.getMonth() == 1) {
      months.feb += 1;
    } if (item.date.getMonth() == 2) {
      months.mar += 1;
    } if (item.date.getMonth() == 3) {
      months.apr += 1;
    } if (item.date.getMonth() == 4) {
      months.may += 1;
    } if (item.date.getMonth() == 5) {
      months.jun += 1;
    } if (item.date.getMonth() == 6) {
      months.jul += 1;
    } if (item.date.getMonth() == 7) {
      months.aug += 1;
    } if (item.date.getMonth() == 8) {
      months.sep += 1;
    } if (item.date.getMonth() == 9) {
      months.oct += 1;
    } if (item.date.getMonth() == 1) {
      months.nov += 1;
    } if (item.date.getMonth() == 11) {
      months.dec += 1;
    } 
    return item.date.getMonth()
  })
  return (
  
    <div className='chartbars-container'>
      <div className="chartbars" id={0}>{listOfMonths.indexOf(0) === -1 ? <div className="chartfill" style={{ height: '0%' }}></div> : <div className="chartfill" style={{ height: `${months.jan * 10}%` }}></div>}</div>
      <div className="chartbars" id={1}>{listOfMonths.indexOf(1) === -1 ? <div className="chartfill" style={{ height: '0%' }}></div> : <div className="chartfill" style={{ height: `${months.feb * 10}%` }}></div>}</div>
      <div className="chartbars" id={2}>{listOfMonths.indexOf(2) === -1 ? <div className="chartfill" style={{ height: '0%' }}></div> : <div className="chartfill" style={{ height: `${months.mar * 10}%` }}></div>}</div>
      <div className="chartbars" id={3}>{listOfMonths.indexOf(3) === -1 ? <div className="chartfill" style={{ height: '0%' }}></div> : <div className="chartfill" style={{ height: `${months.apr * 10}%` }}></div>}</div>
      <div className="chartbars" id={4}>{listOfMonths.indexOf(4) === -1 ? <div className="chartfill" style={{ height: '0%' }}></div> : <div className="chartfill" style={{ height: `${months.may * 10}%` }}></div>}</div>
      <div className="chartbars" id={5}>{listOfMonths.indexOf(5) === -1 ? <div className="chartfill" style={{ height: '0%' }}></div> : <div className="chartfill" style={{ height: `${months.jun * 10}%` }}></div>}</div>
      <div className="chartbars" id={6}>{listOfMonths.indexOf(6) === -1 ? <div className="chartfill" style={{ height: '0%' }}></div> : <div className="chartfill" style={{ height: `${months.jul * 10}%` }}></div>}</div>
      <div className="chartbars" id={7}>{listOfMonths.indexOf(7) === -1 ? <div className="chartfill" style={{ height: '0%' }}></div> : <div className="chartfill" style={{ height: `${months.aug * 10}%` }}></div>}</div>
      <div className="chartbars" id={8}>{listOfMonths.indexOf(8) === -1 ? <div className="chartfill" style={{ height: '0%' }}></div> : <div className="chartfill" style={{ height: `${months.sep * 10}%` }}></div>}</div>
      <div className="chartbars" id={9}>{listOfMonths.indexOf(9) === -1 ? <div className="chartfill" style={{ height: '0%' }}></div> : <div className="chartfill" style={{ height: `${months.oct * 10}%` }}></div>}</div>
      <div className="chartbars" id={1}>{listOfMonths.indexOf(10) === -1 ? <div className="chartfill" style={{ height: '0%' }}></div> : <div className="chartfill" style={{ height: `${months.nov * 10}%` }}></div>}</div>
      <div className="chartbars" id={11}>{listOfMonths.indexOf(11) === -1 ? <div className="chartfill" style={{ height: '0%' }}></div> : <div className="chartfill" style={{ height: `${months.dec * 10}%` }}></div>}</div>
    </div>
  )
}
