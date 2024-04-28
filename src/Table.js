import React from "react";
import Row from "./Row";
import { useState } from "react";

export default function Table(){

let transactions = [
    {
        date: "01/02/2002",
        description: "Debts",
        category: "income",
        amount: "$300"
    },
    {
        date: "10/04/2022",
        description: "Business",
        category: "expense",
        amount: "$600"
    },
    {
        date: "11/03/2012",
        description: "Loan",
        category: "expense",
        amount: "$700"
    },
    {
        date: "21/11/2023",
        description: "Lucky draw",
        category: "income",
        amount: "$1000"
    }
]

const [transactionn, setTransactionn] = useState(transactions)
function handleChange(event){
    const value = event.target.value.toLowerCase(); // Convert input value to lowercase
    const filteredTransactions = transactions.filter((transaction) => {
        return transaction.description.toLowerCase().includes(value);
    });
    setTransactionn(filteredTransactions);
}
return (
    <>
    <div className="input-group mb-3 p-4">
  <input onChange={handleChange} type="text" className="form-control" placeholder="Filter" aria-describedby="basic-addon2"/>
 
</div>
    <table className="table table-secondary">
<thead>
   <tr>
     <th>Date</th>
     <th>Description</th>
     <th>Category</th>
     <th>Amount</th>
   </tr>
</thead>
<tbody>
    <Row transactions={transactionn}/>
</tbody>
</table>
    </>
)

}