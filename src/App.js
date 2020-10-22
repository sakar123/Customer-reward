import React, {useEffect, useState} from 'react'
import './App.css';
import {TransactionList} from './class/TransactionList';

export default function App() {
    const [awards, setAwards] = useState('');
    const [cost, setCost] = useState('');
    useEffect(() => {
        let myTransactionList = new TransactionList();
        myTransactionList.addTransaction(parseInt(cost));
        // myTransactionList.addTransaction(54);
        // myTransactionList.addTransaction(200);
        // myTransactionList.addTransaction(20);
        // myTransactionList.addTransaction(300);
        let arr = myTransactionList.getAllTransactions();
        setAwards(myTransactionList.getTotalRewards());
        console.log(arr);
    }, [cost])
    return (
        <div>
            <input type="number" onChange={(e) => {setCost(e.target.value)}} />
            {awards}
        </div>
    )
}

