import React from "react";
import Transaction from "./Transaction";

function TransactionsList({arrayofAllTransactions, searchTerm}) {
  const transactions = arrayofAllTransactions.filter(transaction=> transaction.description.toLowerCase().includes(searchTerm.toLowerCase()))
  .map((transaction)=> (
    <Transaction
    key= {transaction.id}
    date={transaction.date}
    description={transaction.description}
    category={transaction.category}
    amount={transaction.amount}
    />

  ))
  console.log(transactions)
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