async function getData(id) {
    const data = await fetch(`https://ukulima.onrender.com/API/activity/${id}`);
    return data.json();
}
export default async function ActivityLayout({params, children}) {
    const data = await getData(params.id);
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 p-5 mt-5 h-auto md:h-[100vh] overflow-hidden">
            <div className="flex flex-col gap-5">
                <h2 className="text-lg font-poppins text-gray-1000 text-center w-full h-auto uppercase">{data.title}</h2>
                <div className="rounded-lg bg-gray-100 p-5 h-32 flex flex-col justify-center items-center w-full border border-gray-300">
                    <h3 className="text-lg text-gray-600 font-light">Number of Expenses</h3>
                    <h2 className="font-extrabold font-ephesis text-2xl">{data.expenses.length}</h2>
                </div>
                <div className="rounded-lg bg-gray-100 p-5 h-32 flex flex-col justify-center items-center w-full border border-gray-300">
                    <h3 className="text-lg text-gray-600 font-light">Activity Cost</h3>
                    <h2 className="font-extrabold font-ephesis text-2xl">{data.amountSpent}</h2>
                </div>
            </div>
            {children}
        </div>
    )
}