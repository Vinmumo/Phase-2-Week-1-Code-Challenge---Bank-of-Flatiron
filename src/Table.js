import React from "react";
import Row from "./Row";
import { useState } from "react";
import Search from "./Search";

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

return (
    <>
  <Search transactionn={transactionn} setTransactionn = {setTransactionn} transactions = {transactions}/>
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