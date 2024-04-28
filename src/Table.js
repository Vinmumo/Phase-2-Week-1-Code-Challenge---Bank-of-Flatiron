import React from "react";
import Row from "./Row";
import { useState } from "react";
import Search from "./Search";
import Form from "./Form";

export default function Table(){

let transactions = [
    {
        date: "2002-02-12",
        description: "Debts",
        category: "income",
        amount: "$300"
    },
    {
        date: "2032-05-16",
        description: "Business",
        category: "expense",
        amount: "$600"
    },
    {
        date: "2012-03-11",
        description: "Loan",
        category: "expense",
        amount: "$700"
    },
    {
        date: "2023-11-21",
        description: "Lucky draw",
        category: "income",
        amount: "$1000"
    }
]

const [transactionn, setTransactionn] = useState(transactions)

return (
    <>
  <Search transactionn={transactionn} setTransactionn = {setTransactionn} transactions = {transactions}/>
  <Form transactionn={transactionn} setTransactionn = {setTransactionn} />
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