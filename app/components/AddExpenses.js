"use client";
import { useState } from "react";
import axios from 'axios';

export default function AddExpense({id, revalidate, status}) {
    const [inputs, setInputs] = useState(
        {
            expense: "",
            amount: ""
        }
    );
    const [newExpenses, setNewExpenses] = useState([]);

    const handleInputs = (e) => {
        const {name, value} = e.target;
        setInputs(prev => {return {...prev, [name]: value}});
    }

    const handleExpenses = (e) => {
        e.preventDefault();
        const addExpense = {
            title: inputs.expense,
            amount: inputs.amount,
            activity: id
        }
        setNewExpenses([...newExpenses, addExpense]);
        setInputs({expense: "", amount: ""});
    }

    const unstageExpense = (e) => {
        const id = e.target.id;
        setNewExpenses(prev =>  prev.filter((item, index) => index !== parseInt(id)));
    }

    const commitExpenses = async () => {
        const data = {
            expenses: newExpenses
        }
        if (newExpenses.length > 0)  {
            const response = await axios.post('https://ukulima.onrender.com/API/expenses/create', data);
            setNewExpenses([]);
            revalidate();
            return response.data;
        }
    }

    return (
        <div className="bg-gray-100 h-full rounded-xl p-5 shadow-lg flex flex-col">
            <h4 className="text-center font-semibold text-lg border-b mb-3 border-gray-200 pb-3 text-gray-700 font-ephesis">Add Expenses</h4>
            <form className="flex flex-col gap-3 border-b border-gray-200 pb-5" onSubmit={handleExpenses}>
                <div className="flex flex-col gap-1 w-full h-auto">
                    <label htmlFor="expense">Expense</label>
                    <input onChange={handleInputs} value={inputs.expense} required className="h-9 w-full border resize-none border-teal-500 p-3 rounded-lg" name="expense" type="text" id="expense" />
                </div>
                <div className="flex flex-col gap-1 w-full h-auto">
                    <label htmlFor="amount">Amount</label>
                    <input onChange={handleInputs} value={inputs.amount} required className="h-9 w-full border resize-none border-teal-500 p-3 rounded-lg" name="amount" type="number" id="amount" />
                </div>
                <div className="flex justify-between mt-4">
                    <button disabled={status} className="px-5 py-2 bg-teal-600 text-white font-ephesis rounded-3xl disabled:bg-slate-400" type="submit">Add Expense</button>
                    <button disabled={newExpenses.length === 0} onClick={commitExpenses} className="px-5 py-2 bg-sky-600 text-white font-ephesis rounded-3xl disabled:bg-slate-400" type="button">Save Expenses</button>
                </div>
            </form>
            {newExpenses.length > 0 && 
                <div className="w-full h-48 flex flex-col">
                    <h5 className="mt-5 mb-2 text-center font-semibold font-ephesis">Staged Expensed</h5>
                    <div className="flex flex-col overflow-y-scroll h-full">
                        {newExpenses.map((expense, index) => 
                            <div key={index} className="flex justify-between py-1 relative">
                                <p className="w-full font-extralight">{expense.title}</p>
                                <p className="w-full text-center font-ephesis font-semibold">{expense.amount}</p>
                                <p onClick={unstageExpense} id={index} className="font-xs absolute text-red-500 right-1 font-extralight cursor-pointer">[Delete]</p>
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>
    )
}