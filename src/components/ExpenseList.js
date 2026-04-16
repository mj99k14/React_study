import React, { Component } from 'react'
import "./ExpenseList.css"
export class ExpenseList extends Component {
  render() {
    return (
      <div>
        <ul className='list'>
          {}
        </ul>
        <button className='btn'>
          목록 지우기
        </button>
        
      </div>
    )
  }
}

export default ExpenseList
