export const dynamic = "force-dynamic";
import { revalidatePath } from "next/cache";
import ActivityCard from "./components/ActivityCard";
import NewActivity from "./components/NewActivity";

async function fetchData() {
  const data = await fetch("https://ukulima.onrender.com/API/activities/all");
  return data.json();
}

const revalidate = async () => {
  "use server";
  revalidatePath("/activity/[id]", "page");
}

export default async function Home() {
  const data = await fetchData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 p-5 mt-5">
      <div className="flex flex-col gap-5">
        <NewActivity revalidate={revalidate} />
        <div className="rounded-lg shadow-lg  p-5 h-32 flex flex-col justify-center items-center w-full border border-gray-300">
          <h3 className="text-lg text-gray-600 font-light">Number of Activities</h3>
          <h2 className="font-extrabold font-ephesis text-2xl">{data.activities.length}</h2>
        </div>
        <div className="rounded-lg shadow-lg  p-5 h-32 flex flex-col justify-center items-center w-full border border-gray-300">
          <h3 className="text-lg text-gray-600 font-light">Total Expenses</h3>
          <h2 className="font-extrabold font-ephesis text-2xl">{data.amountSpent}</h2>
        </div>
      </div>
      
      <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
        {
          data.activities.map(activity => <ActivityCard 
              key={activity.activity_id}
              status={activity.status}
              amount={activity.activityAmount}
              expenses={activity.expenses.length}
              title={activity.activity_name}
              id={activity.activity_id}
              date={activity.date}
            />
          )
        }
      </div>
    </div>
  )
}
