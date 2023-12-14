import Link from "next/link";

export default function ActivityCard({amount, expenses, date, title, id, status}) {
    return (
        <Link href={`/activity/${id}`} className="bg-slate-50 relative flex flex-col gap-3 border border-gray-100 rounded-lg p-5 shadow-lg h-48">
          {status && <p className="absolute text-xs font-extralight text-red-500 left-0 top-3 -rotate-45">Closed</p>}
          <h4 className="text-center font-semibold text-lg border-b border-gray-200 pb-3 text-gray-700 font-ephesis">{title}</h4>
          <div className="flex justify-between">
            <p className="text-gray-600 font-light">Amount</p>
            <h4 className="font-bold font-ephesis">{amount}</h4>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600 font-light">Expenses</p>
            <h4 className="font-bold font-ephesis">{expenses}</h4>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600 font-light">Date</p>
            <h4 className="font-bold font-ephesis">{date}</h4>
          </div>
        </Link>
    )
}