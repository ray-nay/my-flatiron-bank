import React , {useState}from "react";

function AddTransactionForm(newData) {

  const [formData, setFormdata] = useState ({
    date:"",
    description:"",
    category:"",
    amount:""
  })

  function handleSubmit(event){
    event.preventDefault();
    fetch("http://localhost:8001/transactions", {
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res=> res.json())
    .then(data=> newData(data))
  }

  function handleChange(e) {
    const key= e.target.name;
    const value=e.target.value;
    setFormdata({...formData, [key]: value});
  }
  return (
    <div className="ui segment">
      <form onSubmit= {handleSubmit} className="ui form">
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
