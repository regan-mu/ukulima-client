"use client";
import axios from "axios";

export default function Expense({id, amount, title, revalidate, status}) {
    const deleteExpense = async (e) => {
        const id = e.target.id
        const response = await axios.delete(`https://ukulima.onrender.com/API/expenses/delete/${id}`);
        revalidate();
        return response.data;
    };
    return (
        <div className="flex justify-between py-1 border-b border-blue-100 relative">
            <p className="font-light w-full">{title}</p>
            <h5 className="text-center font-ephesis font-semibold w-full">{amount}</h5>
            {!status && <p onClick={deleteExpense} id={id} className="font-extralight absolute right-2 cursor-pointer text-red-500 text-sm">[Delete]</p>}
        </div>
    )
}