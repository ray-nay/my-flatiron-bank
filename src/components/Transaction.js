import React from "react";

function Transaction({id, date,description,category, amount}) {

  // Function to persist deleting of data to the db.
  function handleDelete(event){
    // event.preventDefault()
    fetch (`http://localhost:8001/transactions/${id}`, {
      method: 'DELETE', 
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      }
    })
    .then (result => result.json())
    .then(alert ("Item deleted"))
  }
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>{<button id = "delete-btn" onClick={handleDelete}>Delete</button>}</td>
    </tr>
  );
}

export default Transaction;