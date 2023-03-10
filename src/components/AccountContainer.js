import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
const [transactions, setTransactions ] = useState([]);
// Managing the state for the search.
const [searchTerm, setSearch] = useState("");

useEffect(()=> {
  fetch("http://localhost:8001/transactions")
  .then((res)=>res.json())
  .then((data)=>setTransactions(data))
}, [])


      //Using the spread operator to create a copy of transactions into newTransactions.
      
function updatedTransactions(newTransactions){
  const updatedTransactionsArray=[...transactions, newTransactions]
  setTransactions(updatedTransactionsArray)
}


  return (
    <div>
        <Search search={searchTerm} setSearch={setSearch}/>
        <AddTransactionForm newData={updatedTransactions} />
        <TransactionsList arrayofAllTransactions={transactions} transactionsSetter= {setTransactions} searchTerm={searchTerm}/>
    </div>
  );
}

export default AccountContainer;