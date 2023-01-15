import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
const [transactions, setTransactions ] = useState([]);
useEffect(()=> {
  fetch("http://localhost:8001/transactions")
  .then((res)=>res.json())
  .then((data)=>setTransactions(data))
}, [])
      
function updatedTransactions(newTransactions){
  const updatedTransactionsArray=[...transactions, newTransactions]
  setTransactions(updatedTransactionsArray)
}


  return (
    <div>
      <Search />
      <AddTransactionForm newData={updatedTransactions} />
      <TransactionsList arrayofAllTransactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
