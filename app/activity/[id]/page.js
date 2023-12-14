export const dynamic = "force-dynamic";
import AddExpense from "@/app/components/AddExpenses";
import { revalidatePath } from "next/cache";
import Expense from "@/app/components/Expense";

async function fetchData(id) {
    const data = await fetch(`https://ukulima.onrender.com/API/activity/${id}`);
    return data.json();
}

const revalidateData = async () => {
    "use server";
    revalidatePath("/activity/[id]", "page");
}


export default async function Activity({params}) {
    const data = await fetchData(params.id);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-3 w-full gap-5">
            <div className="px-5">
                <h4 className="text-center font-semibold text-lg border-b mb-3 border-gray-200 pb-3 text-gray-700 font-ephesis">Expenses</h4>
                {data.expenses.map(expense => 
                    <Expense key={expense.expense_id} status={data.complete} id={expense.expense_id} amount={expense.amount} title={expense.title} revalidate={revalidateData} />
                )
                }
            </div>
            <AddExpense id={params.id} revalidate={revalidateData} status={data.complete} />
        </div>
    )
}