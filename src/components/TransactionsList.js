import React from "react";
import Transaction from "./Transaction";

function TransactionsList({arrayofAllTransactions, searchTerm}) {

  //Chaining the filter method in order to achieve the search functionality, before going on to map the transactions.
  const transactions = arrayofAllTransactions.filter(transaction=> transaction.description.toLowerCase().includes(searchTerm.toLowerCase()))
  .map((transaction)=> (
    <Transaction
    key= {transaction.id}
    id={transaction.id}
    date={transaction.date}
    description={transaction.description}
    category={transaction.category}
    amount={transaction.amount}
    />

  ))
  console.log(transactions)
  //Table to display the transactions.
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactions}
      </tbody>
    </table>
  );
}

export default TransactionsList;